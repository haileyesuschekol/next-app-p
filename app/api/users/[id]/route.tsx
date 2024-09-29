import { error } from "console"
import { stat } from "fs"
import { NextRequest, NextResponse } from "next/server"
import schema from "../schema"
interface UserId {
  params: { id: number }
}
//get
export function GET(request: NextRequest, { params: { id } }: UserId) {
  if (id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 })
  return NextResponse.json({
    id: 1,
    name: "john",
  })
}

//put

export async function PUT(request: NextRequest, { params: { id } }: UserId) {
  const body = await request.json()
  const validation = schema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  if (id > 10)
    return NextResponse.json({ error: "invalid id" }, { status: 404 })
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}

//delete
export function DELETE(request: NextRequest, { params: { id } }: UserId) {
  if (id > 10) NextResponse.json({ error: "user not found" }, { status: 404 })
  NextResponse.json({ name: "deleted" })
}
