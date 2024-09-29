import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
import { error } from "console"
interface UserId {
  params: { id: number }
}

export async function PUT(request: NextRequest, { params: { id } }: UserId) {
  const body = await request.json()
  const validate = schema.safeParse(body)
  if (!validate.success)
    return NextResponse.json(validate.error.errors, { status: 400 })
  if (id > 10)
    return NextResponse.json({ error: "invalid id" }, { status: 400 })
  return NextResponse.json(
    { id: 5, name: body.name, price: body.price },
    { status: 200 }
  )
}

export function DELETE(request: NextRequest, { params: { id } }: UserId) {
  if (id > 10)
    return NextResponse.json({ error: "invalid id" }, { status: 404 })
  return NextResponse.json({ message: "successfuly deleted" })
}
