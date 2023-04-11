import BlogPostsList from './blogPostCardList'

export default async function Blogg() {
  // TODO fix responsive rendering of images
  return (
    <div className=" bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 ">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="mx-auto max-w-2xl ">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mx-auto">Bloggen</h2>
            </div>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Har du lurt på hva Sissel tenker om Stavangerskolen? Eller hvordan hun tenker å takle
              eldrebølgen? Her kan du lese om det og mye mer.
            </p>
          </div>
          <BlogPostsList />
        </div>
      </div>
    </div>
  )
}
