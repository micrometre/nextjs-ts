import Image from 'next/image'

export default function Logo({ ...rest }) {
  return (
                  <Image
              src="/logo.webp"
              alt="The surreyelc"
              width={340}
              height={90}
              priority
            />
  );
}