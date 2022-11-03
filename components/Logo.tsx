import Image from 'next/image'

export default function Logo({ ...rest }) {
  return (
                  <Image
              src="/logo.webp"
              alt="The surreyelc"
              width={173}
              height={31}
              priority
            />
  );
}