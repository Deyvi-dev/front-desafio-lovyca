import "../app/globals.css"
import Image from "next/image"
import React, { useState } from "react"

interface Review {
  id: number
  name: string
  comment: string
  likes: number
  dislikes: number
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Doe",
      comment: "This is a great service!",
      likes: 10,
      dislikes: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "I had a bad experience with this service.",
      likes: 5,
      dislikes: 3,
    },
  ])

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-semibold mb-6 text-blue-600">Avaliações</h1>
      <div className="relative border-l border-blue-600 max-h-80 overflow-y-auto">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border-b border-blue-600">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-blue-600"></div>
              <div className="ml-2">
                <div className="text-sm font-medium text-blue-600">
                  {review.name}
                </div>
                <div className="text-xs font-normal text-gray-400">
                  {/* {new Date().toLocaleString()} */}
                </div>
              </div>
            </div>
            <div className="text-sm font-normal text-gray-500">
              {review.comment}
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-xs font-normal text-gray-400">
                {review.likes !== 0
                  ? `${review.likes} likes`
                  : `${review.dislikes} dislikes`}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-600">
        Adicionar uma avaliação
      </h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block font-semibold mb-2 text-blue-600"
          >
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border border-blue-600 p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block font-semibold mb-2 text-blue-600"
          >
            Comentário
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            className="border border-blue-600 p-2 w-full"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  )
}
