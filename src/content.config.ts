import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// A project page has a fixed shape (website PRD): the problem, a GIF, a diagram,
// two decisions with the rejected option, measured numbers with their method,
// limits, and "try it" / "help build it" links. The frontmatter holds what the
// templates render; the Markdown body holds the prose sections.
const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one sentence for cards and link previews
    pillar: z.enum([
      "Scale and reliability",
      "Money and data correctness",
      "AI in production",
      "Search and ranking",
    ]),
    order: z.number().default(100), // lower comes first on the Work page
    status: z.enum(["public", "coming"]).default("coming"),
    repo: z.string().optional(), // "owner/name"; enables build-time repo facts
    stack: z.array(z.string()).default([]),
    // Numbers shown in the facts strip. Every one must be in the claim ledger.
    numbers: z
      .array(z.object({ value: z.string(), label: z.string(), method: z.string() }))
      .default([]),
    decisions: z
      .array(z.object({ chose: z.string(), rejected: z.string(), why: z.string() }))
      .default([]),
    limits: z.array(z.string()).default([]), // what it doesn't do, what was only tested with fakes
    media: z.string().optional(), // path under /public to a GIF or image
    diagram: z.string().optional(), // path under /public to an SVG
    draft: z.boolean().default(true), // drafts never reach the built site
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, writing };
