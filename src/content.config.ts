import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const career = defineCollection({
    loader: glob({ base: './src/content/careers', pattern: '**/*.md' }),
    schema: z.object({
        title: z.string(), // e.g. "Doctornow Japan Project"
        company: z.string(), // e.g. "Doctornow"
        role: z.string(), // e.g. "Product Team Lead"
        startDate: z.string(),
        endDate: z.string(),
        lang: z.enum(['ko', 'en']).default('ko'),
        order: z.number().default(0), // Lower number = Higher priority (or reverse, I'll use descending order)
        summary: z.string(), // Brief summary for the card
    })
});

export const collections = { career };