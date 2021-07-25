// import { GetStaticProps } from 'next'
// import Image from 'next/image'

// import Navbar from 'components/Navbar'


// import {
//   TiSocialTwitter,
//   TiSocialDribbble,
//   TiSocialLinkedin,
// } from 'react-icons/ti'
// import { HiGlobeAlt as HiGlobe } from 'react-icons/hi'



// interface ObjectLiteral {
//   [key: string]: any
// }

// const icons: ObjectLiteral = {
//   twitter: TiSocialTwitter,
//   dribbble: TiSocialDribbble,
//   linkedin: TiSocialLinkedin,
// }

// interface IPartner {
//   id: string
//   url: string
//   imageFileName: string
//   description?: string
//   name: string
//   published?: boolean
//   logoImg: {
//     name: string
//     url: string
//     rawUrl: string
//   }[]
// }

// interface IVolunteer {
//   id: string
//   image: string
//   social_link: string
//   social_type: string
//   name: string
//   type: 'contributor' | 'core'
// }

// interface Props {
//   partnerData: IPartner[]
//   volunteerData: IVolunteer[]
// }

// const About: React.FC<Props> = (props) => {
//   const { t } = useTranslation()
//   const { partnerData, volunteerData } = props

//   return (
//     <div>
//       <Navbar />
//       <section className="p-6 bg-coolGray-100 text-coolGray-800">
//         <div className="container p-4 mx-auto text-center">
//           <h3 className="text-2xl text-[#4f46ef] mb-6 font-medium">
//             {t('OUR_PARTNERS')}
//           </h3>
//         </div>
//         <div className="container flex flex-wrap justify-center mx-auto text-coolGray-600">
//           {partnerData.map((partner) => (
//             <div
//               className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4"
//               key={partner.id}
//               title={partner?.description ?? partner.name}
//             >
//               <a
//                 href={partner.url}
//                 target="_blank"
//                 referrerPolicy="no-referrer"
//               >
//                 <Image
//                   // src={`/static/assets/partners/${partner.imageFileName}`}
//                   src={partner.logoImg[0].url}
//                   height={150}
//                   width={150}
//                 />
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section id="team" className="container mx-auto section-team">
//         <div className="flex justify-center my-20 text-center row">
//           <div className="md:col-span-8 lg:col-span-6">
//             <div className="mb-12">
//               <h3 className="text-2xl text-[#4f46ef] mb-6 font-medium">
//                 Core Team
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap mt-8 mb-8 -mx-2">
//           {volunteerData
//             .filter((i) => i.type === 'core')
//             .map((element) => {
//               const SocialIcon = icons[element.social_type] ?? HiGlobe

//               return (
//                 <div
//                   key={element.id}
//                   className="w-full px-2 mb-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div className="mx-8">
//                     <div className="px-8 py-12 mx-auto mt-10 text-center bg-white rounded-md shadow-lg md:px-16">
//                       <img
//                         className="object-cover mx-auto rounded-full shadow-lg w-28 h-28"
//                         src={element.image}
//                         alt="Image"
//                       />
//                       <p className="mt-1 text-xl capitalize">{element.name}</p>
//                       <a
//                         target="_blank"
//                         className="flex flex-row items-center justify-center px-12 py-1 mt-6 space-x-1 text-lg text-white capitalize rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600"
//                         href={element.social_link}
//                       >
//                         <SocialIcon className="w-6 h-6" />
//                         <span>{element.social_type}</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//         </div>
//       </section>
//       <section id="team" className="container mx-auto section-team">
//         <div className="flex justify-center my-20 text-center row">
//           <div className="md:col-span-8 lg:col-span-6">
//             <div className="mb-12">
//               <h3 className="text-2xl text-[#4f46ef] mb-6 font-medium">
//                 Contributors
//               </h3>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-wrap mt-8 mb-8 -mx-2">
//           {volunteerData
//             .filter((i) => i.type === 'contributor')
//             .map((element) => {
//               const SocialIcon = icons[element.social_type] ?? HiGlobe

//               return (
//                 <div
//                   key={element.id}
//                   className="w-full px-2 mb-4 md:w-1/2 lg:w-1/3"
//                 >
//                   <div className="mx-8">
//                     <div className="px-8 py-12 mx-auto mt-10 text-center bg-white rounded-md shadow-lg md:px-16">
//                       <img
//                         className="object-cover mx-auto rounded-full shadow-lg w-28 h-28"
//                         src={element.image}
//                         alt="Image"
//                       />
//                       <p className="mt-1 text-xl capitalize">{element.name}</p>
//                       <a
//                         target="_blank"
//                         className="flex flex-row items-center justify-center px-12 py-1 mt-6 space-x-1 text-lg text-white capitalize rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-blue-500 hover:to-indigo-600"
//                         href={element.social_link}
//                       >
//                         <SocialIcon className="w-6 h-6" />
//                         <span>{element.social_type}</span>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               )
//             })}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   )
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const partnerData: IPartner[] = await fetch(
//     'https://notion-api.splitbee.io/v1/table/2dbc2f82b58944909448f24756debbef'
//   )
//     .then((res) => res.json())
//     .then((res) =>
//       res.filter(({ published }: { published: boolean }) => published)
//     )

//   const volunteerData: IVolunteer[] = await fetch(
//     'https://notion-api.splitbee.io/v1/table/16b6dd8733794d7fbd6bfa77f7d361da'
//   ).then((res) => res.json())

//   return {
//     props: { volunteerData, partnerData },
//     revalidate: 60,
//   }
// }

// export default About