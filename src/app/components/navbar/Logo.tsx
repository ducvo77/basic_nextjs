'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()
  return (
    <div className="hidden md:flex flex-grow flex-shrink-0 basis-[140px]">
      <Image
        onClick={() => router.push('/')}
        alt="Logo"
        className=" cursor-pointer"
        height="100"
        width="100"
        src="/images/logo.png"
      ></Image>
    </div>
  )
}

export default Logo
