import imageUrlBuilder from '@sanity/image-url'
import Carousel from 'components/shared/Carousel'
import NavCard from 'components/shared/NavCard'
import { groq } from 'next-sanity'
import { client } from 'sanity-conf/sanity.client'
import { ExternalArticle } from 'type'
import FeaturedArticles from './featuredArticles'
import TasteOfStavangerCard from './TasteOfStavangerCard'

const builder = imageUrlBuilder(client)

export default async function Home() {
  const imgQuery = groq`*[_type == "sanity.imageAsset" && references("YnlZeKMD8CzfnPkn94VV1v")] {
  url,
  alt,
  _id
}`

  const navCardsQuery = groq`
*[_type=='navigation'] {
...,
} `

  const navCards = await client.fetch(navCardsQuery)
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
    url,
  }`

  const sisselNavQuery = groq`
  *[
    _type == 'sanity.imageAsset' &&
      references(*[_type == 'media.tag' && name.current == 'om_sissel_øverst']._id)
  ][0] {
    url,
  }`
  const sommerNavQuery = groq`
  *[
    _type == 'sanity.imageAsset' &&
      references(*[_type == 'media.tag' && name.current == 'sommer_landing']._id)
  ][0] {
    url,
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
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-y-16 px-4 md:px-8 xl:px-0">
          <Carousel content={CarouselProps} />
          <div className="flex flex-col gap-y-16 justify-center object-center items-center max-w-4xl mx-auto ">
            <NavCard
              title={'Bli kjent med Sissel'}
              description={
                'Sissel er Høyres ordførerkandidat i Stavanger. Hun har et brennende ønske om at nettop DU skal få det bedre, der du bor. Trykk under for å finne ut mer om henne.'
              }
              image={sisselNav.url}
              button={'MØT SISSEL'}
              href={'/om-sissel'}
              bg={'bg-secondary_dark'}
              textColor={'text-light'}
              imgFirst={false}
            />
            <NavCard
              title={'Møt Stavanger-laget'}
              description={
                'I opptakten til høstens kommunevalg har Stavangerlaget hendene fulle. Her kan du bli kjent med dem og deres arbeid.'
              }
              image={lagetNav.url}
              button={'FØLG LAGET'}
              href={'/laget'}
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
              image={sommerNav.url}
              button={'LES MER'}
              href={'/sommer-med-sissel'}
              bg={'bg-lighter'}
              textColor={'text-secondary'}
              imgFirst={true}
            />
            <FeaturedArticles articles={articles} />
          </div>
        </div>
        {/* </div> */}
        <div
          className={`max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-16 pb-24 mx-8`}
        ></div>
      </div>
    </main>
  )
}
