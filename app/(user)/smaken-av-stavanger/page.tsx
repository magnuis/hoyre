import { poppins } from 'styles/fonts'
import BlogPostsList from './blogPostCardList'

export default async function Blogg() {
  // TODO fix responsive rendering of images
  return (
    <div className="max-w-7xl mx-auto mt-24 md:mt-48">
      {/* <div className="mx-auto flex flex-col max-w-2xl gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"> */}
      <div className="flex flex-col max-w-xl mx-auto md:mb-12 px-6 sm:px-0 gap-y-6 md:gap-y-10 text-center">
        <div className="text-center">
          <h1 className={`text-3xl md:text-5xl font-bold ${poppins.className}`}>
            Smaken av Stavanger
          </h1>
        </div>

        <p className="text-lg leading-8 text-gray-600">
          Har du lurt på hva Sissel tenker om Stavangerskolen? Eller hvordan hun tenker å takle
          eldrebølgen? Her kan du lese om det og mye mer.
        </p>
      </div>
      <div className="mx-auto flex flex-col p-4 gap-y-24 mb-48">
        <BlogPostsList />
      </div>
    </div>
  )
}
