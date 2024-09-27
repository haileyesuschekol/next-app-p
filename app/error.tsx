"use client"
import React from "react"
interface Props {
  error: Error
  reset: () => void
}

const Error = ({ error, reset }: Props) => {
  console.log(error)
  return (
    <div>
      Unexpected error occure.
      <button className="p-2 m-4 bg-red-600 text-white" onClick={() => reset()}>
        Retry
      </button>
    </div>
  )
}

export default Error
