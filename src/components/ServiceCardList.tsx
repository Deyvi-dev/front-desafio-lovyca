"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import ServiceCard from "./ServiceCard"

interface Service {
  id: string
  name: string
  description: string
  price: number
  likes: number
  dislikes: number
}

export default function ServiceCardList() {
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get("http://localhost:5001/api/services")
        const data = response.data
        console.log(data)
        setServices(data)
      } catch (error) {
        console.warn(error)
      }
    }

    fetchServices()
  }, [])

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  )
}
