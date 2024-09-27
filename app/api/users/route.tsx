import { NextResponse } from "next/server"

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
