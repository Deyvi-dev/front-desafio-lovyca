import Image from "next/image"

export default function Logo() {
  return (
    <a href="#" className="flex items-center">
      <Image
        src="/logo.png"
        className="bg-sky-600 h-8 mr-3"
        alt="Logo"
        width={35}
        height={35}
      />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Services
      </span>
    </a>
  )
}
