import { z } from "zod"

const schema = z.object({
  name: z.string().min(2).max(20),
})

export default schema
