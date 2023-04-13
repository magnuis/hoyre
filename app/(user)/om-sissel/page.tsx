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
        <div className="text-center max-w-md mx-auto my-24">
          <p className="font-bold">
            Sissel er Høyres ordførerkandidat i Stavanger. Hun er mor til tre - Espen, Emilie og
            Fredrik.
          </p>
        </div>
        <Image src="" alt="" width={900} height={900}></Image>
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
        </div>
      </div>
    </div>
  )
}
