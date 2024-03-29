import {
  Layout,
  FileVue,
  Plugs,
  MagicWand,
  Code,
  Lifebuoy,
  SketchLogo
} from 'phosphor-react'

export default function WorkExperience() {
  return (
    <div>
      <h4>Work Experience</h4>
      <div className='h-1 mt-3 rounded-full flex-col w-full max-w-md bg-gradient-to-r from-lilac-600  to-sky-600 block'></div>
      <p className='mt-8'>
      Throughout my career in the tech industry, I have acquired valuable experience as both a software developer and UI/UX designer. Here is a concise overview of my journey:
      </p>
      {workExperiences.map((item, index) => {
        return (
          <div
            key={item.id}
            className='bg-dark-800 w-full border-solid container border-gray-500 p-10 rounded-2xl flex flex-col mt-12 border-1 border-dark-700'
          >
            <div className='flex flex-col w-full items-center'>
              <div>
                <p className='mb-2'>{item.status}</p>
                <h5>{item.position}</h5>
                <h6 className='mt-3 text-sm uppercase font-medium tracking-wider text-lilac-600'>
                  {item.company}
                </h6>
                <div className='grid flex-row md:flex-col md:grid-cols-2 gap-12 mt-6'>
                  <div>
                    <p>{item.atributions}</p>
                  {
                    item.highlight && (
                      <div className="flex gap-3 items-center mt-3">
                          <SketchLogo
                                    size={42}
                                    color={'#5ba3fa'}
                                    weight='fill'
                                    className='p-2 shrink-0 rounded-md border-s-white'
                                  />
                            <p className='text-xs text-sky-600'>{item.highlight}</p>
                      </div>

                    )
                  }
                  </div>
                 <div className='flex flex-col gap-3 md:gap-6'>
                  <p className='text-white font-semibold'>Main Duties</p>
                    {item.mainDuties.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <div
                          key={index}
                          className='text-sm bg-dark flex gap-3 items-start'
                        >
                          <Icon
                            size={36}
                            color={'#907ceb'}
                            weight='fill'
                            className='bg-dark-700 p-2 shrink-0 rounded-md border-solid border-1 border-dark-500'
                          />
                          <p>{item.description}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

const workExperiences = [
  {
    id: '001',
    status: '2022 - Present',
    position: 'Software Developer, UX/UI Designer',
    company: 'Nelogica',
    atributions: [
      `
      At Nelogica, my primary responsibility is to elevate our product as top one application for calculating investors' taxes in the country. 
      I have been designing and coding innovative features that ensure our product meets our clients' needs, all while delivering a user experience that is both intuitive and enjoyable. 
      `
    ],
    mainDuties: [
      {
        icon: MagicWand,
        description: 'Craft innovative UI/UX experiences to delight users while addressing their specific needs.',
      },
      {
        icon: Code,
        description: 'Engineer features for the Single Page Application, prioritizing responsiveness and code excellence',
      },
      {
        icon: Lifebuoy,
        description: 'Provide timely bug resolutions and user support, ensuring user satisfaction.',
      },
    ],
  },
  {
    id: '002',
    status: '2021 - 2022',
    position: 'Frontend Developer, UX/UI Designer',
    company: 'Akeloo',
    atributions: [
      `As a UX/UI designer and frontend developer at Akeloo, a rising fintech startup, I played a pivotal role in  designing low and high fidelity prototypes to enhance various features, expand service offerings, and optimize support processes. My work directly contributed to the company's growth and success in the competitive fintech market.`
    ],
    highlight: 'In 2023, Akeloo was acquired by big fintech Nelogica.',
    mainDuties: [
      {
        icon: Layout,
        description: 'Designed user-friendly UI prototypes for new features and elevated the design of existing ones.',
      },
      {
        icon: FileVue,
        description: 'Developed reusable HTML, CSS, and JavaScript components, assuring code quality.',
      },
      {
        icon: Plugs,
        description: 'Integrated the frontend with RESTful APIs and conduced interface testing.',
      },
    ],
  },
]
