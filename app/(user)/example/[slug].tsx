import { client } from '../../../sanity-conf/sanity.client'

export async function getStaticPaths() {
  const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  }
}

export default function Example() {
  return (
    <main>
      <div>{/* <p>Main</p> */}</div>
    </main>
  )
}
