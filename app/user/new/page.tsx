"use client"
import { useRouter } from "next/navigation"
import React from "react"

const NewUserPage = () => {
  const router = useRouter()
  return (
    <div>
      <button
        className="p-3 m-2 bg-slate-300"
        onClick={() => router.push("/user")}
      >
        Create Form
      </button>
    </div>
  )
}

export default NewUserPage
