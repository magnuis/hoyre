import BackArrow from 'components/shared/BackArrow'
import Image from 'next/image'
import StoryContent, { StoryContentProps } from './StoryContent'

const storyContent = [
  {
    title: 'BARNDOM I HARSTAD:',
    content:
      'Vi har oppnådd mye. Jeg er stolt av det Stavanger vi sammen har skapt, fra å være oljehovedstad til energihovedstad. Jeg har et brennende engasjement for næringslivet. Nye arbeidsplasser skal vokse frem på skuldrene av olje- og gasseventyret. Nå blir det en viktig jobb å skaffe arbeidskraften vi trenger for å ta steget videre inn i det grønne skiftet.',
    img: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
  },
  {
    title: 'UNGDOMSÅRENE:',
    content:
      'Vi har oppnådd mye. Jeg er stolt av det Stavanger vi sammen har skapt, fra å være oljehovedstad til energihovedstad. Jeg har et brennende engasjement for næringslivet. Nye arbeidsplasser skal vokse frem på skuldrene av olje- og gasseventyret. Nå blir det en viktig jobb å skaffe arbeidskraften vi trenger for å ta steget videre inn i det grønne skiftet.',
    img: 'https://hoyre.no/content/uploads/sites/212/2022/09/20220907_123329386_iOS-scaled.jpg',
  },
  {
    title: 'VEIEN INN I POLITIKKEN:',
    content:
      'Vi har oppnådd mye. Jeg er stolt av det Stavanger vi sammen har skapt, fra å være oljehovedstad til energihovedstad. Jeg har et brennende engasjement for næringslivet. Nye arbeidsplasser skal vokse frem på skuldrene av olje- og gasseventyret. Nå blir det en viktig jobb å skaffe arbeidskraften vi trenger for å ta steget videre inn i det grønne skiftet.',
    img: '',
  },
  {
    title: 'FAMILIELIV:',
    content:
      'Vi har oppnådd mye. Jeg er stolt av det Stavanger vi sammen har skapt, fra å være oljehovedstad til energihovedstad. Jeg har et brennende engasjement for næringslivet. Nye arbeidsplasser skal vokse frem på skuldrene av olje- og gasseventyret. Nå blir det en viktig jobb å skaffe arbeidskraften vi trenger for å ta steget videre inn i det grønne skiftet.',
    img: 'https://hoyre.no/content/uploads/sites/212/2022/09/20220907_123329386_iOS-scaled.jpg',
  },
]
export default function AboutSissel() {
  return (
    <div className="max-w-7xl mx-auto sm:mt-16">
      {/* <div className="sm:absolute relative ml-6 ">
        <BackArrow slug="/smaken-av-stavanger" />
      </div> */}
      <div
        className={`relative container top-0 left-0 w-full md:max-w-7xl h-[90vh] md:h-[60vh] text-center bg-cover bg-center pt-[50vh]`}
        style={{
          backgroundImage:
            'url(https://hoyre.no/content/uploads/sites/212/2021/11/2W9A5316-kopi-1024x660.jpg)',
        }}
      >
        <p className="text-white text-4xl ">Bli kjent med Sissel</p>
      </div>
      <div className="mx-auto flex flex-col gap-y-8 p-6">
        <div className="text-center max-w-lg mx-auto my-24">
          <p className="font-bold text-2xl">
            Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og
            Fredrik.
          </p>
        </div>
        <Image
          src="https://premium.vgc.no/v2/images/ea71d845-a98a-47af-a34f-7623b5e1b7b1?fit=crop&format=auto&h=1425&w=1900&s=e10bed9c5cbfa2e48d588258d2cf5f208e0442aa"
          alt=""
          width={900}
          height={900}
          className="container h-[50vh] object-cover object-center"
        />
        <div className="relative max-w-xl mx-auto">
          {storyContent.map((story, index) => (
            <div key={index}>
              <StoryContent title={story.title} img={story.img} content={story.content} />
            </div>
          ))}
          <div className="pb-8 relative">
            <div className="pl-8 flex flex-col gap-y-5">
              <p className="text-gray-500 text-xs">{'ORDFØRERKANDIDAT:'}</p>
              <p>Nå er Sissel godt i gang med arbeidet mot å bli Stavanger neste ordfører.</p>
            </div>
            <div className="absolute top-0 transform h-3 w-3 bg-white rounded-full border border-primary translate-x-[-6.5px]" />
          </div>
          <div className="rounded-xl bg-primary">
            <img
              src="https://hoyre.no/content/uploads/sites/212/2022/09/20220826_181949666_iOS-scaled.jpg"
              alt=""
              className="rounded-t-lg object-cover object-top h-[30vh] w-full"
            />
            <div className="flex flex-col gap-y-5 text-white p-5">
              <div className="text-center text-2xl font-bold">
                <p>Følg Sissel i hverdagen</p>
              </div>
              <div>
                <p>Facebook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
              <div>
                <p>Linkedin</p>
              </div>
              <span className="text-white w-fit">
                {/* <FaLinkedin className="h-6 w-6" /> */}

                <p>Høyre</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
