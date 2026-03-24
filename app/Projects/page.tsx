import ArrowIcon from '@/components/ArrowIcon'
import Project from '@/components/Project'
import React from 'react'

const   Projects = () => {
  return (
    <div className='px-5 py-3 mt-3 mb-5 rounded-lg'>
        <h1 className='font-bold text-2xl mb-3'>Projects</h1>
        <div className='flex flex-col md:flex-row h-fit relative  items-center gap-10 md:flex-wrap  justify-between rounded-lg p-4 md:border-2 md:border-gray-500 md:hover:border-gray-100/70 md:border-dashed'>
        <Project Title="DevTinder" Background="https://ik.imagekit.io/kmgkmgnr7/Portfolio/Retro.jpeg?updatedAt=1773674996146" PreviewImage="https://ik.imagekit.io/kmgkmgnr7/Portfolio/DevTinder.png?updatedAt=1773680718731" Content="DevTinder is a  networking platform where developers can connect, send requests, and chat with each other in real time." url="https://devtinder-ebgf.onrender.com/login" />
        <Project Title="DevTinder" Background="https://ik.imagekit.io/kmgkmgnr7/Portfolio/Retro.jpeg?updatedAt=1773674996146" PreviewImage="https://ik.imagekit.io/kmgkmgnr7/Portfolio/DevTinder.png?updatedAt=1773680718731" Content="DevTinder is a  networking platform where developers can connect, send requests, and chat with each other in real time." url="https://devtinder-ebgf.onrender.com/login" />
        </div>
        <div className='border w-fit mx-auto mt-2 border-stone-700 rounded-lg flex p-[1px] '>
        <div className='text-center flex items-center justify-center'>
          <div className='w-fit flex items-start gap-1 border-2 px-3 py-1 bg-[#d1ccc2]/90 text-[var(--foreground)] border-gray-600 rounded-lg cursor-pointer hover:bg-[#d1ccc2] transition-all duration-300'>    
          View All <ArrowIcon  rotate={-33} color='var(--foreground)' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default Projects

// class="h-full p-4 sm:p-6 rounded-xl bg-background/40 backdrop-blur-xl border-2 border-dashed border-border hover:border-primary/50 shadow-lg hover:shadow-xl transition-all duration-300"