import { string, z } from "zod"

const schema = z.object({
  name: string().min(2).max(20),
})

export default schema
