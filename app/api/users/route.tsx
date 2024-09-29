import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import schema from "./schema"

// to prevent caches add props 'NextRequest'
export function GET() {
  return NextResponse.json([
    { id: 1, name: "john" },
    {
      id: 2,
      name: "doe",
    },
  ])
}

//post
export async function POST(request: NextRequest) {
  const body = await request.json()
  const validate = schema.safeParse(body)
  if (!validate.success) {
    return NextResponse.json(validate.error.errors, { status: 400 })
  } else {
    return NextResponse.json({ id: 3, name: body.name }, { status: 201 })
  }
}
