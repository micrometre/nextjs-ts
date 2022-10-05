import Image from 'next/image'

export default function HeroIllustration() {
  return (
    <Image
    src="/2.webp"
    alt="The surreyelc"
    width={500}
    height={300}
    priority
  />
  )
}
