import { error } from "console"
import { stat } from "fs"
import { NextRequest, NextResponse } from "next/server"

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
//post
export async function POST(request: NextRequest) {
  const body = await request.json()
  if (!body.name) {
    return NextResponse.json({ error: "name is require" }, { status: 400 })
  } else {
    return NextResponse.json({ id: 3, name: body.name }, { status: 201 })
  }
}

//put
export async function PUT(request: NextRequest, { params: { id } }: UserId) {
  const body = await request.json()

  if (!body.name)
    return NextResponse.json({ error: "name is required" }, { status: 400 })

  if (id > 10)
    return NextResponse.json({ error: "invalid id" }, { status: 404 })
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 })
}

//delete
export function DELETE(request: NextRequest, { params: { id } }: UserId) {
  if (id > 10) NextResponse.json({ error: "user not found" }, { status: 404 })
  NextResponse.json({})
}
