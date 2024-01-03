import * as z from "zod"


export const searchParamsSchema = z.object({
  page: z.coerce.number().optional(),
  sort: z.string().optional(),
})