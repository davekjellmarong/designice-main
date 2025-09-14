import React from 'react'

export const Header = ({ title, ingress }) => {
  return (
    <div>
      <h1 className="my-4 whitespace-pre-line text-left text-2xl font-bold leading-tight md:text-4xl md:leading-tight">
        {title}
      </h1>
      <p className="text-gray-700 mb-2 text-left text-base md:text-xl">
        {ingress}
      </p>
    </div>
  )
}
