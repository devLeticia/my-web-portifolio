import Image from 'next/image'
import externaLinks from '@/../../externalLinks.json'
export default function Projects() {
  const dribbbleUrl = externaLinks.dribbbleUrl
  const githubUrl = externaLinks.dribbbleUrl

  return (
    <div>
      <h4>Projects</h4>
      <div className='h-1 mt-3 rounded-full w-1/2 bg-gradient-to-r from-lilac-600  to-sky-600'></div>
      <p className='mt-8'>
        Develop responsive web pages for a Single-Page Application using
        JavaScript, HTML, CSS. Develop responsive web pages for a Single-Page
        Application using JavaScript, HTML, CSS,{' '}
      </p>
      <div className='bg-dark-800 w-full border-solid  border-gray-500 p-10 rounded-2xl flex flex-col mt-20 relative'>
        <h6 className='uppercase font-medium tracking-wider text-lilac-600'>
          FOUR POINTS UX
        </h6>
        <p className='mt-6'>
          Develop responsive web pages for a Single-Page Application using
          JavaScript, HTML, CSS. Develop responsive web pages for a Single-Page
          Application using JavaScript, HTML, CSS,{' '}
        </p>
        <button className='rounded-full w-48 absolute right-10 bottom-10'>
          Learn more
        </button>
        <Image
          src='/projects/fake_mocks.png'
          alt='mockups'
          className='-mb-10 mt-20'
          width={1200}
          height={1200}
        />
      </div>
      <div className='flex  mt-20'>
        <div className='bg-dark-800 w-full border-solid h-96 border-gray-500 p-10 rounded-2xl flex flex-col justify-between'>
          <h6 className='uppercase font-medium tracking-wider text-lilac-600'>
            Drimoos
          </h6>
          <Image
            src='/projects/fake_mocks.png'
            alt='mockups'
            className='-mb-10 '
            width={1200}
            height={1200}
          />
        </div>
        <div className='max-w-sm px-10 flex flex-col justify-between'>
          <p className='mt-6'>
            Develop responsive web pages for a Single-Page Application using
            JavaScript, HTML, CSS. Develop responsive web pages for a
            Single-Page Application using JavaScript, HTML, CSS,{' '}
          </p>
          <button className='rounded-full w-full'>Learn more</button>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    status: 'www.mottibox.com',
    name: 'Motti Box',
    brief: 'MOTIVATION PHRASE FOR THE DAY',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['AI', 'React', 'Figma'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
  {
    status: 'ongoing',
    name: '4 Points',
    brief: 'UX/UI Essentials for Developers',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['Medium', 'Figma', 'Design Theory'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
  {
    status: 'ongoing',
    name: 'Quiz Clash',
    brief: 'Attack Defense Quiz Game',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    categories: ['design', 'development', 'marketing', 'web', 'mobile'],
    technologies: ['Javascript', 'React'],
    imgPath: '/projects/background.png',
    highlightImgPath: '/projects/character.png',
  },
]

/* 
Quiz Clash 
Pomotok
Rabbit Rocket

Drimoos
Brigader-in 
Ciambella
*/
