import { useState } from "react"
import "../app/globals.css"

export default function Services() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    console.log({ name, description, value })
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Criar serviço</h1>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Descrição
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="value" className="block text-gray-700 font-bold mb-2">
            Valor
          </label>
          <input
            type="number"
            id="value"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          Criar serviço
        </button>
      </form>
    </div>
  )
}
