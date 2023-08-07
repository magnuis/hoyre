import Carousel from 'components/shared/Carousel'
import NavCard from 'components/shared/NavCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { ExternalArticle } from 'type'
import FeaturedArticles from './featuredArticles'
import TasteOfStavangerCard from './TasteOfStavangerCard'
import generateThumbnailUrl from 'components/appearance/Thumbnail'

export default async function Home() {
  const imgQuery = groq`*[_type == "sanity.imageAsset" && 
    references(*[_type == 'media.tag' && name.current == 'forsidebilde']._id)
  ] {
  url,
  alt,
  _id
}`

  const images = await client.fetch(imgQuery)

  const CarouselProps = images.map((image: any) => {
    return {
      content: {
        title: 'title',
        description: 'description',
        button: 'button',
        image: image.url,
      },
    }
  })

  const postsQuery = groq`
    *[_type == "blogPost"][0..4] {
      _id,
      title, 
      slug, 
      image, 
      description,
      date, 
      categories[]->{title}, 
      body
    } | order(_updatedAt desc)
    `

  const lagetNavQuery = groq`
  *[
    _type == 'sanity.imageAsset' &&
      references(*[_type == 'media.tag' && name.current == 'hele_laget']._id)
  ][0] {
    _id,
  }`

  const sisselNavQuery = groq`
  *[
    _type == 'sanity.imageAsset' &&
      references(*[_type == 'media.tag' && name.current == 'om_sissel_øverst']._id)
  ][0] {
    _id,
  }`
  const sommerNavQuery = groq`
  *[
    _type == 'sanity.imageAsset' &&
      references(*[_type == 'media.tag' && name.current == 'sommer_med_sissel']._id)
  ][0] {
    _id,
  }`

  const articlesQuery = groq`
  *[_type == 'externalArticle' && featured == true] {
    _id,
    title,
    categories[] -> {
        _id,
        title,
    },
    publisher,
    description,
    date,
    externalLink
  }`

  const posts = await client.fetch(postsQuery)
  const lagetNav = await client.fetch(lagetNavQuery)
  const sisselNav = await client.fetch(sisselNavQuery)
  const sommerNav = await client.fetch(sommerNavQuery)
  const articles: ExternalArticle[] = await client.fetch(articlesQuery)

  return (
    <main>
      <Carousel content={CarouselProps} />
      <div className="max-w-7xl mx-auto pt-20">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center object-center items-center max-w-4xl mx-auto px-4 md:px-8 xl:px-0">
            <NavCard
              title={'Bli kjent med Sissel'}
              description={
                'Sissel er Høyres ordførerkandidat i Stavanger. Hun har et brennende ønske om at nettopp DU skal få det bedre, der du bor. Trykk under for å finne ut mer om henne.'
              }
              image={sisselNav ? sisselNav._id : ''}
              button={'MØT SISSEL'}
              href={'/bli-kjent-med-sissel'}
              bg={'bg-secondary_dark'}
              textColor={'text-light'}
              imgFirst={false}
            />
            <NavCard
              title={'Møt Stavanger-laget'}
              description={
                'I opptakten til høstens kommunevalg har Stavangerlaget hendene fulle. Her kan du bli kjent med dem og deres arbeid.'
              }
              image={lagetNav ? lagetNav._id : ''}
              button={'FØLG LAGET'}
              href={'/veien-til-valget'}
              bg={'bg-lighter_gray'}
              textColor={'text-secondary_dark'}
              imgFirst={true}
            />
            <TasteOfStavangerCard posts={posts} />
            <NavCard
              title={'Sommer med Sissel'}
              description={
                'Bli med Sissel å utforske alt det spennende en sommer i Stavanger har å by på - fra Flor & Fjære til Hengjanenibbå, og alt imellom!'
              }
              image={sommerNav ? sommerNav._id : ''}
              button={'LES MER'}
              href={'/sommer-med-sissel'}
              bg={'bg-lighter'}
              textColor={'text-secondary'}
              imgFirst={true}
            />
            <FeaturedArticles articles={articles} />
          </div>
        </div>
      </div>
    </main>
  )
}

export const metadata = {
  openGraph: {
    title: 'Sammen for Stavanger',
    description: 'Bli bedre kjent med de som sammen skal gjøre Stavanger til et bedre sted.',
    url: 'https://hoyre.vercel.app/',
    images: [
      {
        url: generateThumbnailUrl(
          'https://cdn.sanity.io/images/p6r82l3b/production/644499521d32d5dccedc0547d908ce8cf095ba88-2048x1536.jpg'
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
