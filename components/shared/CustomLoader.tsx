import Image from 'next/image'

export default function CustomLoader(props: {
  src: string
  width: number
  alt: string
  height: number
}) {
  return (
    <div className="flex justify-center items-center">
      <Image
        loader={unsplashLoader}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        sizes="100vw"
      />
    </div>
  )
}
