

type Props = {
  imageUrl: string
  caption: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="w-[450px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow">
      <img className="w-full" src={imageUrl} alt="image" />
    </figure>
  )
}
