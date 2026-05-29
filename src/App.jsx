import { useState } from 'react'
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
import { RiPencilRuler2Line } from "react-icons/ri";
import MobileProjectContainer from './components/MobileProjectContainer';
import WebsiteProjectContainer from './components/WebsiteProjectContainer';
import './App.css'
import 'animate.css'

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
import meddle1 from '/assets/meddle1.png'
import scrollup from '/assets/scrollup.png'
import LaundryApp from '/assets/LaundryApp1.png'
import CarRent from '/assets/RentCar1.png'
import PetApp from '/assets/PetKonek1.png'

function App() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  const [formData, setFormData] = useState(initialFormData)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [sending, setSending] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'idle', message: '' })

    const { firstName, lastName, email, subject, message } = formData
    if (!firstName || !lastName || !email || !subject || !message) {
      setStatus({ type: 'error', message: 'Please fill in all fields before submitting.' })
      return
    }

    setSending(true)
    setStatus({ type: 'sending', message: 'Sending message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const text = await response.text()
      let result = {}
      try {
        result = text ? JSON.parse(text) : {}
      } catch {
        result = { error: text || 'Server returned invalid JSON.' }
      }

      if (!response.ok) {
        throw new Error(result.error || response.statusText || 'Unable to send the message.')
      }

      setStatus({ type: 'success', message: 'Your message was sent successfully!' })
      setFormData(initialFormData)
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Something went wrong. Please try again.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <div className='w-full flex flex-col items-center justify-center font-varela'>
        <div className='fixed  top-0 z-50 flex flex-col md:flex-row items-center w-full max-w-6xl px-4 py-4 gap-4 md:gap-0'>
          <div className='w-full md:w-1/4 flex justify-center md:justify-start'>
            <img src={logo2} alt="icon" className='w-10 h-10' />
          </div>

          <div className='w-full md:w-1/2 flex justify-center gap-4 md:gap-20 text-palette5 font-semibold bg-palette1 py-4 rounded-full text-xs md:text-base'>
            <a href="#about" className="hover:text-palette3 flex items-center gap-2"> <BsFillPersonFill /> About</a>
            <a href="#projects" className="hover:text-palette3 flex items-center gap-2"> <RiPencilRuler2Line /> Projects</a>
            <a href="#contact" className="hover:text-palette3 flex items-center gap-2"> <BiSolidContact /> Contact</a>
          </div>

          <div className='w-full md:w-1/4 flex justify-center md:justify-end gap-10 text-xl'>
            <a href="https://github.com/michinnn" target='_blank' rel='noopener noreferrer'><FaGithubAlt className='text-palette1' /></a>
            <a href="https://www.linkedin.com/in/mai-sanchez" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='text-palette1' /></a>
            <a href="https://www.behance.net/maisanchez" target='_blank' rel='noopener noreferrer'><FaBehance className='text-palette1' /></a>
          </div>
        </div>

        <div id='home' className='flex flex-col md:flex-row w-full pt-28 px-4 max-w-6xl'>
          <div className='w-full md:w-1/2 flex flex-col items-center md:items-start justify-start mt-10 md:mt-24 text-2xl md:text-4xl text-center md:text-left'>
            <h1 className='text-palette2 uppercase tracking-widest'>I'm Mai, a <span className='text-palette1'>UI Designer</span> and <span className='text-palette1'>Front-End Developer</span></h1>
            <a href="#about"><img src={arrowdown} alt="" className='mt-10 h-20 md:h-32' /></a>
          </div>
          <div className='w-full md:w-1/2 flex items-center justify-center md:justify-end mt-10 md:mt-0'>
            <div className='flex relative w-full h-auto'>
              <img src={bgimage} alt="" className='w-full h-auto scale-120' />
              <img src={me} alt="overlay" className='absolute w-full h-auto scale-75 -mt-5 md:-mt-9' />
            </div>
          </div>
        </div>
      </div>

  <div id='about' className='w-full flex flex-col justify-center items-center py-20 px-4 mt-10'>

      <a href="#home">
        <div className='fixed bottom-10 right-10 flex flex-col w-16 h-16 z-50'>
          <img src={scrollup} alt="buttonup" />
        </div>
      </a>

      <div className='flex absolute w-full h-auto'>
        <img src={bgcircle} alt="" className='w-full h-auto scale-120' />
      </div>
        <div className='flex w-full justify-center'>
          <img src={pickmeup1} alt="pickmeup" className='w-1/2 md:w-1/6 h-auto scale-50'/>
        </div>
        <div className='flex w-full flex-col justify-center font-varela text-palette1 text-center py-12 px-4 md:px-36 gap-24'>
          <div className='flex flex-col w-full text-justify gap-8 items-start '> 
            <h1 className='text-md md:text-2xl'>This is Ma. Andrhea Ivhon, a UI/UX designer and a Junior Front-End Developer.</h1>
            <p className='text-xs md:text-lg leading-8 md:leading-10 font-extralight'>I spent most of my time working on enhancing my designing and developing skills. Nowadays, we should not settle on things we already have knowledge. Technology is innovating every time so we should also innovate and up-skill.</p>
          </div>
          <div className='flex flex-col w-full text-justify gap-8 items-start'>
            <h1 className='text-md md:text-2xl'>Why UI/UX Designing and Developing?</h1>
            <p className='text-xs md:text-lg leading-8 md:leading-10 font-extralight'>As a creative person and a person who have a playful mind, I fall in love first in designing application and website interface. I got curious on developing my own design that’s why I am on my learning phase on developing web and app. I really love whenever I saw the result first hand on what I designed turn into a interactive website and mobile application.</p>
          </div>
          <div className='flex flex-col w-full text-justify gap-8 items-start'>
            <h1 className='text-md:text-2xl'>In the near future, I want to collaborate more to other designers and developers who share the same dreams with me. </h1>
          </div>
          </div>
        </div>

        <div className='flex w-full flex-col py4 px-4 justify-center items-center'>
          <img src={notdeadyet} alt="notdeadyet" className='w-1/6 h-auto scale-50'/>
          <h1 className='text-3xl md:text-5xl font-semibold text-palette2 font-varela'>Skill Set</h1>
          <img src={notdeadyet} alt="notdeadyet" className='w-1/6 h-auto scale-50 rotate-180'/>

          <div className='flex w-full h-auto scale-90'>
            <img src={skillset} alt="skillset" className='w-full h-auto mt-10'/>
          </div>
        </div>

        <div id='projects' className='flex flex-col w-full h-auto py-32 justify-center items-center'>
          <div className='flex w-1/2 md:w-1/4 h-auto scale-100'>
          <img src={projects} alt="projects" className='w-full h-auto'/>
          </div>

          <div className='flex flex-col pt-32'>
          <MobileProjectContainer
            imageSrc={fairygod}
            projectName="Fairy God Barbie"
            description="An e-commerce mobile application for beauty products. This target their consumer for easy product checkout and daily updates. Consumers can easily view the availability of the product and its price."
            containerClass="mt-20"
          />

          <WebsiteProjectContainer
            imageSrc={attendancesystem}
            projectName="Attendance System"
            description="An attendance system being used by the company for attendance checking and for communication. Employees can post just like any other social media and they can also view the tasks they were assigned to."
            containerClass="mt-20"
          />

          <MobileProjectContainer
            imageSrc={loadapp}
            projectName="Loading Application"
            description="A simple mobile application for sim networks. Users can also top-up their wallet for easy access on loading their sims."
            containerClass="mt-20"
            backgroundClass='bg-palette1'
          />

          <WebsiteProjectContainer
            imageSrc={purplejeepney}
            projectName="Purple Jeepney"
            description="A simple website for a Creatives Website showcasing their works/portfolio, members, and their history."
            containerClass="mt-20"
            backgroundClass='bg-palette3'
          />

          <MobileProjectContainer
            imageSrc={PetApp}
            projectName="Pet App"
            description="A simple mobile application for pet owners to book services for their pets and avail veterinary care through an app."
            containerClass="mt-20"
            backgroundClass='bg-palette1'
          />

          <WebsiteProjectContainer
            imageSrc={CarRent}
            projectName="Car Rental"
            description="A website for a car rental service showcasing their fleet, booking system, and customer reviews."
            containerClass="mt-20"
            backgroundClass='bg-palette3'
          />

          <MobileProjectContainer
            imageSrc={LaundryApp}
            projectName="Laundry Application"
            description="A simple mobile application for laundry services. Users can schedule pickups, make an order, track their orders, and make payments."
            containerClass="mt-20"
            backgroundClass='bg-palette1'
          />
          </div>

          <div id='contact' className='flex flex-col md:flex-row px-4 w-full pt-32 gap-8'>
            <div className='flex flex-col w-full md:w-1/2 items-start text-start px-4 gap-8'>
              <img src={meddle1} alt="meddle1" className='w-1/6 h-auto'/>
                <h1 className='font-varela text-palette2 text-2xl md:text-4xl uppercase font-semibold'>Contact Me</h1>
                <p className='font-varela text-palette2 text-xs md:text-md pr-0 md:pr-24'>If you have questions, suggestions, and inquiries, please contact me via email or contact number, or send an email using the contact form.</p>
              <div className='flex flex-col w-full gap-2'>
                <p className='font-varela text-palette2 text-md'>Email</p>
                <p className='font-varela text-palette2 text-md font-extrabold'>maandrheaivhon.work@gmail.com</p>
              </div>
                <div className='flex flex-col w-full gap-2'>
                  <p className='font-varela text-palette2 text-md'>Mobile Number</p>
                  <p className='font-varela text-palette2 text-md'>(+63) 968 290 3857</p>
                </div>

                <div className='flex w-full gap-8'>
                  <a href="https://github.com/michinnn" target='_blank' rel='noopener noreferrer'><FaGithubAlt className='text-palette2' /></a>
                  <a href="https://www.linkedin.com/in/mai-sanchez" target='_blank' rel='noopener noreferrer'><FaLinkedinIn className='text-palette2' /></a>
                  <a href="https://www.behance.net/maisanchez" target='_blank' rel='noopener noreferrer'><FaBehance className='text-palette2' /></a>
              </div>
            </div>
            <div className='flex w-full md:w-1/2 justify-between items-center'>
              {/* <form className='w-full bg-palette2 rounded-lg p-8 flex flex-col' onSubmit={handleSubmit}>
                <div className='w-full flex gap-5 md:gap-10'>
                  <div className='w-1/2 mb-5'>
                    <label htmlFor='firstName' className='block mb-2.5 text-palette5 text-md font-medium font-varela'>First Name</label>
                    <input
                      type='text'
                      id='firstName'
                      name='firstName'
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className='bg-palette5 border rounded-md focus:ring-brand focus:border-brand focus:outline-palette2 text-heading text-sm block w-full px-3 py-3'
                      placeholder='Your Name'
                      required
                    />
                  </div>
                  <div className='w-1/2 mb-5'>
                    <label htmlFor='lastName' className='block mb-2.5 text-palette5 text-md font-medium font-varela'>Last Name</label>
                    <input
                      type='text'
                      id='lastName'
                      name='lastName'
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className='bg-palette5 border rounded-md focus:ring-brand focus:border-brand focus:outline-palette2 text-heading text-sm block w-full px-3 py-3'
                      placeholder='Your Last Name'
                      required
                    />
                  </div>
                </div>
                <div className='mb-5'>
                  <label htmlFor='email' className='block mb-2.5 text-palette5 text-md font-medium font-varela'>Email Address</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='bg-palette5 border rounded-md focus:ring-brand focus:border-brand focus:outline-palette2 text-heading text-sm block w-full px-3 py-3'
                    placeholder='example@gmail.com'
                    required
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='subject' className='block mb-2.5 text-palette5 text-md font-medium font-varela'>Subject</label>
                  <textarea
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    className='bg-palette5 border rounded-md focus:ring-brand focus:border-brand focus:outline-palette2 text-heading text-sm block w-full px-3 py-3'
                    placeholder='Insert Subject here...'
                    rows='2'
                    required
                  />
                </div>
                <div className='mb-5'>
                  <label htmlFor='message' className='block mb-2.5 text-palette5 text-md font-medium font-varela'>Message</label>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    value={formData.message}
                    onChange={handleInputChange}
                    className='bg-palette5 border rounded-md focus:ring-brand focus:border-brand focus:outline-palette2 text-heading text-sm block w-full px-3 py-3'
                    placeholder='Write your message here...'
                    required
                  />
                </div>
                <div className='mb-5'>
                  {status.type === 'success' && <p className='text-green-600'>{status.message}</p>}
                  {status.type === 'error' && <p className='text-red-600'>{status.message}</p>}
                  {status.type === 'sending' && <p className='text-palette2'>{status.message}</p>}
                </div>
                <div className='flex w-full justify-end'>
                  <button
                    type='submit'
                    disabled={sending}
                    className='w-1/3 justify-center flex text-palette5 bg-palette3/50 box-border border-transparent hover:bg-palette3 rounded-lg text-md px-8 py-2 disabled:cursor-not-allowed disabled:opacity-60'
                  >
                    {sending ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </form>  */}
            </div>         
          </div>
        </div>
    </>
  )
}

export default App
