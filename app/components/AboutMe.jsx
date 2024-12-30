"use client"
import Image from 'next/image'
import React, {useTransition, useState} from 'react'
import myprofile from '@/app/images/ayoswa.jpg'
import TabButton from './TabButton'

const Tab_DATA =[
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex items-center">
                <fieldset className="max-w-md border-2 border-indigo-400 rounded-lg px-4 py-2 mx-4 text-lg">
                    <legend className="px-2 font-semibold">Skills</legend>
                    <div className="flex flex-col gap-2 text-base sm:text-lg text-gray-200">
                        <a href="#" >Administrative Law</a>
                        <a href="#">Company Law</a>
                        <a href="#" >Judicial Process</a>
                        <a href="#">Legal Education and RM 2</a>
                        <a href="#">Civil Procedure Code (CPC)</a>
                        <a href="#">Human Rights and International Law</a>
                    </div>
                </fieldset>
            </div>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="ml-5 space-y-4 text-gray-400">
                <li className="border-l-4 border-blue-500 pl-4">
                    <p className="font-semibold text-lg">Bachelors Degree in Computer Systems and Security</p>
                    <small className="text-sm text-gray-300 pl-4">Malawi University of Science and Technology</small>
                </li>
                <li className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-lg">Secondary Education</p>
                    <small className="text-sm text-gray-300 pl-4">Rumphi Secondary School</small>
                </li>
                <li className="border-l-4 border-yellow-500 pl-4">
                    <p className="font-semibold text-lg">Secondary Education</p>
                    <small className="text-sm text-gray-300 pl-4">Bolero Secondary School</small>
                </li>
            </ul>

        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <div className="flex flex-col gap-2 w-auto items-center p-4">
            
            <a className="w-full max-w-xl grid shadow-sm rounded-lg bg-[#3B608D] grid-cols-12 p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                
                <div className="col-span-12 md:col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M3 10h18M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M8 14h8" />
                </svg>

                </div>
                
                <div className="col-span-11 xl:-ml-5">
                <p className="text-gray-300 font-semibold">Kamuzi university of health sciences</p>
                </div>
                
                <div className="md:col-start-2 col-span-11 xl:-ml-5">
                <p className="text-sm text-gray-200 font-light"> Software Developer</p>
                </div>
                
            </a>
            <a className="w-full max-w-xl grid shadow-sm rounded-lg bg-[#3B608D] grid-cols-12 p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                
                <div className="col-span-12 md:col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M3 10h18M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M8 14h8" />
                </svg>
                </div>
                
                <div className="col-span-11 xl:-ml-5">
                <p className="text-gray-300 font-semibold">Northern region water board</p>
                </div>
                
                <div className="md:col-start-2 col-span-11 xl:-ml-5">
                <p className="text-sm text-gray-200 font-light">ICT support officer itern(Karonga office)</p>
                </div>
                
            </a>
            <a className="w-full max-w-xl grid shadow-sm rounded-lg bg-[#3B608D] grid-cols-12 p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
                
                <div className="col-span-12 md:col-span-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M3 10h18M4 10v10a2 2 0 002 2h12a2 2 0 002-2V10M8 14h8" />
                </svg>
                </div>
                
                <div className="col-span-11 xl:-ml-5">
                <p className="text-gray-300 font-semibold">Campaign for female education (Malawi)</p>
                </div>
                
                <div className="md:col-start-2 col-span-11 xl:-ml-5">
                <p className="text-sm text-gray-200 font-light">ICT support officer intern</p>
                </div>
                
            </a>
            
            
            </div>

        )
    }
]
const AboutMe = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })
    }
  return (
    <section className='text-white py-4'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:'>
            <div className="w-[280px] sm:w-[340px] lg:w-[440px] mx-auto mb-6 flex flex-col items-center justify-center border border-gray-300 rounded-3xl shadow-md p-4">
                <div className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center border border-gray-200 rounded-full overflow-hidden mb-4">
                    <Image 
                        src={myprofile}
                        className="object-cover"
                        width={400}
                        height={400}
                        alt="Joshua Phiri"
                    />
                </div>
                <p className="text-center italic font-medium text-gray-300 text-sm sm:text-base lg:text-lg">
                    "Innovate, optimize, and secure—my mission as an IT professional is to empower businesses and drive meaningful digital transformation."
                </p>
            </div>

            
            <div className='ml-9 sm:ml-3 mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-300 sm:text-white mb-4'>About Me</h2>
                <p className=' text-base text-[#ADB7BE] md:text-gray-300 sm:text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque est 
                    impedit quae, illo voluptatem assumenda, rem autem repellat necessitatibus asperiores 
                    et facilis explicabo dolorem voluptas distinctio quos consequuntur itaque.
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={() => handleTabChange("skills")} 
                    active={tab=="skills"}>
                        {" "}
                        Skills{""}
                    </TabButton>

                    <TabButton 
                    selectTab={() => handleTabChange("experience")} 
                    active={tab=="experience"}>
                        {" "}
                        Experience{""}
                    </TabButton>

                    <TabButton 
                    selectTab={() => handleTabChange("education")} 
                    active={tab=="education"}>
                        {" "}
                        Education{""}
                    </TabButton>

                </div>
                <div className='mt-8'>{Tab_DATA.find((t)=> t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe