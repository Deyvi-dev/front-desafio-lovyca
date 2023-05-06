import Navbar from "@/components/Navbar"
import ServiceCardList from "@/components/ServiceCardList"

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Lista de serviços
        </h1>
        <ServiceCardList />
      </div>
    </div>
  )
}
