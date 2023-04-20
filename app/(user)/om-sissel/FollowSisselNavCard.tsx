import Button from 'components/shared/Button'
import { urlFor } from 'sanity-conf/urlFor'

interface followSisselNavCardProps {
  image: {
    _id: string
  }
}
export default function FollowSisselNavCard({ image }: followSisselNavCardProps) {
  return (
    <div className="rounded-xl bg-dark">
      <img
        src={
          image
            ? urlFor(image._id).width(600).format('webp').url()
            : 'https://cdn.sanity.io/images/1hwvyivq/production/42453a115f2e5f0f9d985e31ec6b34607d684c8c-1875x2500.jpg'
        }
        alt=""
        className="rounded-t-lg object-cover object-top h-[30vh] w-full"
      />
      <div className="relative flex flex-col gap-y-7 text-white p-5 text-center items-center">
        <p className="text-2xl font-bold">Følg Sissel i hverdagen:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button text="FACEBOOK" href="https://www.facebook.com/sissel.k.hegdal" />
          <Button text="INSTAGRAM" href="https://www.instagram.com/sisselhegdal/" />
          <Button text="LINKEDIN" href="https://www.linkedin.com/in/sissel-knutsen-hegdal/" />
        </div>
        <Button
          text="SISSELS PERSONPROFIL (HØYRE.NO)"
          href="https://hoyre.no/stavanger/sissel-knutsen-hegdal-var-ordforerkandidat/"
        />
      </div>
    </div>
  )
}
