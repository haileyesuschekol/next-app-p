import z from "zod"

const schema = z.object({
  name: z.string().min(2).max(20),
  price: z.number(),
})

export default schema
