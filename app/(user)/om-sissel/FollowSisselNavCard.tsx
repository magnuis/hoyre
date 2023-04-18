import Button from 'components/shared/Button'

export default function FollowSisselNavCard() {
  return (
    <div className="rounded-xl bg-dark">
      <img
        src="https://hoyre.no/content/uploads/sites/212/2022/09/20220826_181949666_iOS-scaled.jpg"
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
