import * as z from "zod"


export const searchParamsSchema = z.object({
  page: z.string().optional(),
  sort: z.string().optional(),
})

