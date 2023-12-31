import * as z from "zod"


export const searchParamsSchema = z.object({
  page: z.coerce.number().default(1),
  sort: z.string().optional(),
})