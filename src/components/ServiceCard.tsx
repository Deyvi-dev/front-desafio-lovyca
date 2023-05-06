import React, { useState } from "react"
import Image from "next/image"

interface ServiceCardProps {
  name: string
  description: string
  price: number
  likes: number
  dislikes: number
}

export default function ServiceCard({
  name,
  description,
  price,
  likes,
  dislikes,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col max-w-lg p-4 my-4 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <h5 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </a>
      <p className="mb-4 font-normal text-gray-500 dark:text-gray-400 flex-grow">
        {description}
      </p>
      <div className="flex items-center mb-4">
        <span className="ml-1 font-semibold text-lg text-gray-900 dark:text-green-400">
          R${price.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <a href="/reviews">
          <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded mb-4 sm:mb-0">
            Avaliar
          </button>
        </a>
        <div className="flex items-center">
          <div className="flex items-center">
            <Image src="/like.svg" alt="Like Icon" width={25} height={25} />
            <span className="mx-1">{likes}</span>
          </div>
          <div className="flex items-center ml-4">
            <Image
              src="/dislike.svg"
              alt="Dislike Icon"
              width={25}
              height={25}
            />
            <span className="mx-1">{dislikes}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
