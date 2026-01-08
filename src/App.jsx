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
import pickmeup1 from '/assets/pickmeup1.png'
import bgcircle from '/assets/bg-circle.png'
import notdeadyet from '/assets/notdeadyet1.png'
import skillset from '/assets/skills.png'
import projects from '/assets/projects.png'
import attendancesystem from '/assets/attendancesystem.png'
import fairygod from '/assets/fairygod.png'
import loadapp from '/assets/LoadApp.png'
import purplejeepney from '/assets/purplejeepney.png'

function App() {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center font-varela'>
        <div className='flex flex-col md:flex-row items-center w-full max-w-6xl px-4 py-4 gap-4 md:gap-0'>
          <div className='w-full md:w-1/4 flex justify-center md:justify-start'>
            <img src={logo2} alt="icon" className='w-10 h-10' />
          </div>

          <div className='w-full md:w-1/2 flex justify-center gap-4 md:gap-20 text-palette5 font-semibold bg-palette1 py-4 rounded-full text-xs md:text-base'>
            <a href="#" className="hover:text-palette3 flex items-center gap-2"> <RiPencilRuler2Line /> Projects</a>
            <a href="#" className="hover:text-palette3 flex items-center gap-2"> <BsFillPersonFill /> About</a>
            <a href="#" className="hover:text-palette3 flex items-center gap-2"> <BiSolidContact /> Contact</a>
          </div>

          <div className='w-full md:w-1/4 flex justify-center md:justify-end gap-10 text-xl'>
            <a href="https://github.com/michinnn" target='_blank' rel='noopener noreferrer'><FaGithubAlt className='text-palette1' /></a>
            <a href="https://www.linkedin.com/in/mai-sanchez" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='text-palette1' /></a>
            <a href="https://www.behance.net/maisanchez" target='_blank' rel='noopener noreferrer'><FaBehance className='text-palette1' /></a>
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-full px-4 max-w-6xl'>
          <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-start mt-10 md:mt-24 text-2xl md:text-4xl text-center md:text-left'>
            <h1 className='text-palette2 uppercase tracking-widest'>I'm Mai, a <span className='text-palette1'>UI Designer</span> and <span className='text-palette1'>Front-End Developer</span></h1>
            <img src={arrowdown} alt="" className='mt-10 h-20 md:h-32' />
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0'>
            <div className='flex relative w-full h-auto'>
              <img src={bgimage} alt="" className='w-full h-auto scale-120' />
              <img src={me} alt="overlay" className='absolute w-full h-auto scale-75 -mt-9' />
            </div>
          </div>
        </div>
      </div>

  <div className='w-full flex flex-col justify-center items-center py-20 px-4 mt-10'>
      <div className='flex absolute w-full h-auto'>
        <img src={bgcircle} alt="" className='w-full h-auto scale-120' />
      </div>
        <div className='flex w-full justify-center'>
          <img src={pickmeup1} alt="pickmeup" className='w-1/6 h-auto scale-50'/>
        </div>
        <div className='flex w-full flex-col justify-center font-varela text-palette1 text-center py-12 px-36 gap-24'>
          <div className='flex flex-col w-full text-justify gap-8 items-start '> 
            <h1 className='text-2xl'>This is Ma. Andrhea Ivhon, a UI/UX designer and a Junior Front-End Developer.</h1>
            <p className='text-lg leading-10 font-extralight'>I spent most of my time working on enhancing my designing and developing skills. Nowadays, we should not settle on things we already have knowledge. Technology is innovating every time so we should also innovate and up-skill.</p>
          </div>
          <div className='flex flex-col w-full text-justify gap-8 items-start'>
            <h1 className='text-2xl'>Why UI/UX Designing and Developing?</h1>
            <p className='text-lg leading-10 font-extralight'>As a creative person and a person who have a playful mind, I fall in love first in designing application and website interface. I got curious on developing my own design that’s why I am on my learning phase on developing web and app. I really love whenever I saw the result first hand on what I designed turn into a interactive website and mobile application.</p>
          </div>
          <div className='flex flex-col w-full text-justify gap-8 items-start'>
            <h1 className='text-2xl'>In the near future, I want to collaborate more to other designers and developers who share the same dreams with me. </h1>
          </div>
          </div>
        </div>

        <div className='flex w-full flex-col py4 px-4 justify-center items-center'>
          <img src={notdeadyet} alt="notdeadyet" className='w-1/6 h-auto scale-50'/>
          <h1 className='text-5xl font-semibold text-palette2 font-varela'>Skill Set</h1>
          <img src={notdeadyet} alt="notdeadyet" className='w-1/6 h-auto scale-50 rotate-180'/>

          <div className='flex w-full h-auto py-4 px-4 scale-90'>
            <img src={skillset} alt="skillset" className='w-full h-auto mt-10'/>
          </div>
        </div>

        <div className='flex flex-col w-full h-auto py-32 justify-center items-center'>
          <div className='flex w-1/4 h-auto scale-100'>
          <img src={projects} alt="projects" className='w-full h-auto mt-10'/>
          </div>


          <div className='flex flex-col w-full'>
            <div className='flex w-full bg-palette3 px-24 items-start'>
              <div className='flex w-1/2 items-end'>
                <img src={fairygod} alt="fairygod" className='mt-16'/>
              </div>
              <div className='flex w-1/2 justify-center mt-16'>
              <h1 className='flex font-bebasneue text-palette5 text-6xl'>Fairy God Barbie</h1>
              </div>
            </div>
          </div>

        </div>
    </>
  )
}

export default App
