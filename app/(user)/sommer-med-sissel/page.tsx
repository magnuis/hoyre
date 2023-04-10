import SommerPost from 'components/sommerMedSissel/post'

import { SummerPost } from 'type'

const posts = [
  {
    _id: 'gkjhlkj',
    title: 'Boost your conversion rate',
    slug: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://premium.vgc.no/v2/images/5cd96f31-9262-4ae7-abd6-ba30e9bfa769?fit=crop&format=auto&h=1383&w=1900&s=43ceb61880aa7936e3207216f53c8949df82a1bd',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id: 'ihjln',
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://premium.vgc.no/v2/images/5cd96f31-9262-4ae7-abd6-ba30e9bfa769?fit=crop&format=auto&h=1383&w=1900&s=43ceb61880aa7936e3207216f53c8949df82a1bd',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id: 'cyvub',
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://premium.vgc.no/v2/images/5cd96f31-9262-4ae7-abd6-ba30e9bfa769?fit=crop&format=auto&h=1383&w=1900&s=43ceb61880aa7936e3207216f53c8949df82a1bd',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    _id: 'hjklm',
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'https://premium.vgc.no/v2/images/5cd96f31-9262-4ae7-abd6-ba30e9bfa769?fit=crop&format=auto&h=1383&w=1900&s=43ceb61880aa7936e3207216f53c8949df82a1bd',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function SummerWSissel() {
  // TODO fix responsive rendering of images
  return (
    <div className=" bg-white py-16 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-10 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sommer med Sissel
            </h2>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Sissel har bodd i Stavanger i over 30 år, og har en stor lidenskap for å vise frem
              byen. Bli med på en spennende sommertur i Stavanger og omegn, og opplev byen fra en
              helt ny vinkel.
            </p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Visste du at Stavanger har 52 hverdagsturer spredd utover hver eneste bydel? Eller at
              Breiavatnet og Stokkavatnet ikke er de eneste stedene å mate ender? Les videre for å
              finne ut mer!
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="hidden lg:block w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://www.fjordnorway.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjew0njor%2Fimage%2Fupload%2Far_1.5%2Cc_fill%2Cq_95%2Cw_1280%2Fv1%2FVisit%2520Region%2520Stavanger%2FGo%2520Fjords%2FPreikestolen-plateau-Go-Fjords-Bob-Engelsen-P1026771_kljg5o%3F_a%3DATAABAA0&w=1920&q=75"
                alt=""
                className="aspect-[9/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>

            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  src="https://gladmat.no/wp-content/uploads/Gladmat-hoteller-scaled.jpg"
                  alt=""
                  className="aspect-[7/5] w-[24rem] lg:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://premium.vgc.no/v2/images/801d2632-9bf1-484c-9d05-fedaf58308a4?fit=crop&format=auto&h=1425&w=1900&s=7ff2f3f92785213a8b3c761d7ccdc528d6bffdae"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="order-first flex w-64 flex-none lg:justify-end justify-center self-end lg:self-center lg:w-auto">
                <img
                  src="https://premium.vgc.no/v2/images/5cd96f31-9262-4ae7-abd6-ba30e9bfa769?fit=crop&format=auto&h=1383&w=1900&s=43ceb61880aa7936e3207216f53c8949df82a1bd"
                  alt=""
                  className="aspect-[4/3] lg:w-[24rem] w-[16rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="space-y-16 lg:space-y-16">
              {posts.map((post) => (
                <div key={post._id}>{SommerPost(post)}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
