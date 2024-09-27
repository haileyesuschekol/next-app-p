import { error } from "console"
import { NextRequest, NextResponse } from "next/server"

interface UserId {
  params: { id: number }
}

export function GET(request: NextRequest, { params: { id } }: UserId) {
  if (id > 10)
    return NextResponse.json({ error: "user not found" }, { status: 404 })
  return NextResponse.json({
    id: 1,
    name: "john",
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.name)
    return NextResponse.json({ error: "name require" }, { status: 400 })
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}
