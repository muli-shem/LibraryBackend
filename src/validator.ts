import { pgTable } from 'drizzle-orm/pg-core';
import { z } from 'zod';

export const Booksschema = z.object({
  Title: z.number(),
  Author: z.string(),
  Year:z.string()
});