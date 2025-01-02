import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(), // Ensures the `date` field is parsed as a Date object
    author: z.string(),
    tags: z.array(z.string()).optional(),
    image: z.string(),
  }),
});

export const collections = { blog };
