import SummerPostCard from 'components/sommerMedSissel/SummerPostCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import imageUrlBuilder from '@sanity/image-url'
import { poppins } from 'styles/fonts'
import generateThumbnailUrl from 'components/appearance/Thumbnail'
import { SummerPost } from 'type'
import SommerMedSisselList from './SommerMedSisselList'

const builder = imageUrlBuilder(client)

const SummerWSissel = async () => {
  const postQuery = groq`
        *[_type=='summerPost'] {
          title,
          slug,
          image,
          description, 
          date, 
          _id
        }`

  const posts: SummerPost[] = await client.fetch(postQuery)

  return (
    <div className="pt-24 sm:pt-36 md:pt-48">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none">
          <div className="mx-auto max-w-2xl lg:pb-8">
            <span className="text-center">
              <h1 className={`font-medium tracking-wide text-2xl sm:text-5xl ${poppins.className}`}>
                Sommer med Sissel
              </h1>
            </span>
            <p className="mt-10 text-xl leading-8 text-gray">
              Sissel har bodd i Stavanger i over 30 år, og har en stor lidenskap for å vise frem
              byen. Bli med på en spennende sommertur i Stavanger og omegn, og opplev byen fra en
              helt ny vinkel.
            </p>
            <p className="mt-6 text-base leading-7 text-gray">
              Visste du at Stavanger har 52 hverdagsturer spredd utover hver eneste bydel? Eller at
              Breiavatnet og Stokkavatnet ikke er de eneste stedene å mate ender? Les videre for å
              finne ut mer!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white pb-24 sm:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <SommerMedSisselList posts={posts} />
        </div>
      </div>
    </div>
  )
}

export default SummerWSissel

export const metadata = {
  openGraph: {
    title: 'Sammen for Stavanger | Sommer med Sissel',
    description:
      'Sissel har bodd i Stavanger i over 30 år, og har en stor lidenskap for å vise frem byen. Bli med på en spennende sommertur i Stavanger og omegn, og opplev byen fra en helt ny vinkel.',
    url: 'https://hoyre.vercel.app/sommer-med-sissel',
    images: [
      {
        url: generateThumbnailUrl(
          'https://cdn.sanity.io/images/p6r82l3b/production/dfd8859b7abf5b3d3e18f01727f8f5dcc1cc6018-2048x1536.jpg'
        ),
        width: 800,
        height: 600,
      },
    ],
  },
  robots: {
    index: true,
  },
}
