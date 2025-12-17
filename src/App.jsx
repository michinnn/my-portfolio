import { useState } from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";
import './App.css'

//IMPORT IMAGES HERE
import logo2 from '/assets/logo2.png'
import arrowdown from '/assets/arrowdown.png'
import bgimage from '/assets/bgimage.png'
import me from '/assets/me.png'

function App() {
  return (
    <>
    <div className='w-full flex flex-col items-center justify-center font-varela'>
      <div className='flex items-center w-full max-w-6xl px-4 py-4 md:flex-row md:gap-0'>
        <div className='w-1/4 '>
          <img src={logo2} alt="icon" className='w-10 h-10'/>
        </div>

        <div className='w-1/2 flex justify-center gap-20 text-palette5 font-semibold bg-palette1 py-4 rounded-full'>
          <a href="#" className="hover:text-palette3 flex items-center gap-2"> <RiPencilRuler2Line /> Projects</a>
          <a href="#" className="hover:text-palette3 flex items-center gap-2"> <BsFillPersonFill /> About</a>
          <a href="#" className="hover:text-palette3 flex items-center gap-2"> <BiSolidContact /> Contact</a>
        </div>

        <div className='w-1/4 flex justify-end gap-10 text-xl'>
          <a href="https://github.com/michinnn" target='_blank' rel='noopener noreferrer'><FaGithubAlt className='text-palette1'/></a>
          <a href="www.linkedin.com/in/mai-sanchez" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='text-palette1'/></a>
          <a href="https://www.behance.net/maisanchez" target='_blank' rel='noopener noreferrer'><FaBehance className='text-palette1'/></a>
        </div>
      </div>

      <div className='flex w-full px-4 max-w-6xl'>
        <div className='w-1/2 flex-col items-start justify-start mt-24 text-4xl'>
          <h1 className='text-palette2 uppercase tracking-widest'>I'm Mai, a <span className='text-palette1'>UI Designer</span> and <span className='text-palette1'>Front-End Developer</span></h1>
          <img src={arrowdown} alt="" className='mt-10 h-32'/>
        </div>
        <div className='w-1/2 flex items-center justify-end'>
         <div className='flex relative w-full h-auto'>
            <img src={bgimage} alt=""className='w-full h-auto scale-120'/>
            <img src={me} alt="overlay" className='absolute w-full h-auto scale-75 -mt-9'/>
          </div>
        </div>
      </div>

      <div className='flex w-full max-w-6xl px-4 py-20 gap-10 justify-center uppercase text-palette3 text-6xl font-black'>
        <div className=' hover:text-palette1 cursor-pointer'>
          <h2>Projects.</h2>
        </div>        
        <div className=' hover:text-palette1 cursor-pointer'>
          <h2>UI Design.</h2>
        </div>        
        <div className=' hover:text-palette1 cursor-pointer'>
          <h2>App/Web.</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
