// Repo facts pulled from the GitHub API at build time (website PRD: "repo facts").
// The site never calls GitHub from the browser. If the API can't be reached
// (offline build, blackout, rate limit), the page simply leaves the facts out.

export type RepoFacts = {
  stars: number;
  release: string | null;
  goodFirstIssues: number;
  url: string;
};

const cache = new Map<string, Promise<RepoFacts | null>>();

async function api(path: string): Promise<Response> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "User-Agent": "khatirkoohi.com-build",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return fetch(`https://api.github.com${path}`, {
    headers,
    signal: AbortSignal.timeout(8000),
  });
}

async function load(repo: string): Promise<RepoFacts | null> {
  try {
    const repoRes = await api(`/repos/${repo}`);
    if (!repoRes.ok) return null;
    const info = (await repoRes.json()) as { stargazers_count: number; html_url: string };

    let release: string | null = null;
    const relRes = await api(`/repos/${repo}/releases/latest`);
    if (relRes.ok) release = ((await relRes.json()) as { tag_name: string }).tag_name;

    let goodFirstIssues = 0;
    const issuesRes = await api(
      `/repos/${repo}/issues?state=open&labels=${encodeURIComponent("good first issue")}&per_page=100`,
    );
    if (issuesRes.ok) {
      const issues = (await issuesRes.json()) as Array<{ pull_request?: unknown }>;
      goodFirstIssues = issues.filter((i) => !i.pull_request).length;
    }

    return { stars: info.stargazers_count, release, goodFirstIssues, url: info.html_url };
  } catch {
    return null;
  }
}

export function repoFacts(repo: string | undefined): Promise<RepoFacts | null> {
  if (!repo || process.env.SKIP_GITHUB === "1") return Promise.resolve(null);
  if (!cache.has(repo)) cache.set(repo, load(repo));
  return cache.get(repo)!;
}
