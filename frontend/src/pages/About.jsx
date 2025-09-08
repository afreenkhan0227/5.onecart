import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className=' w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-[#c8b9a9] gap-[50px] pt-[80px]'>
      <Title text1={'ABOUT'} text2={'US'}/>
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>

        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={about} alt="" className='lg:w-[65%] w-[80%] shadow-md shadow-black rounded-sm' />
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px] text-[30px] flex-col mt-[20px] lg:mt-[0px]'>
          <p> <b>Ahlam – Celebrating Modesty with Style & Grace </b></p>
          <p className='lg:w-[80%] w-[100%]  text-[black] md:text-[16px] text-[15px]'>
          At Ahlam, we believe modesty is an art—a beautiful expression of identity, elegance, and confidence. Our mission is simple yet profound: to empower women through abayas that blend timeless elegance with modern design. We create pieces that celebrate your values, your style, and your grace.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>
             modern shoppers—combining style, convenience, and affordability. Whether it’s fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy returns, and a customer-first shopping experience you’ll love.
          </p>
          <p className='lg:w-[80%] w-[100%] text-[30px] text-[black] lg:text-[30px] mt-[10px] font-bold'>Our Story</p>
          <p className='lg:w-[80%] w-[100%] leading-[1.7] text-[black] md:text-[16px] text-[15px]'>
          Ahlam was born from a deep desire—to offer abayas that reflect the inner strength and heritage of every woman. What started as a personal exploration of elegant modesty quickly grew into a thriving digital atelier, driven by love for craftsmanship and curated beauty.

Every design is a reflection of our founder’s admiration for simplicity merged with grace, woven together with a vision for abayas that feel personal, meaningful, and always stylish.
          </p>
        </div>
      </div>
      <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
        <Title text1={'What Makes'} text2={'Us Different'}/>
        <div className='w-[80%] flex items-center justify-center lg:flex-row flex-col py-[40px]'>

          <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-black flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[black] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[black]'>Craftsmanship & Quality</b>
            <p>Each abaya at Ahlam is a quiet masterpiece, designed to drape around you with breathtaking elegance and whispering secrets of bespoke artistry—where every stitch is a loving note in our symphony of luxury.</p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-black flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[black] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[black]'>Inclusive & Thoughtful Design</b>
            <p>
            At Ahlam, each design—whether from our women's or men's collection—is a testament to the fusion of modesty and modern elegance. Crafted for those who honor their values without sacrificing style.
            </p>
          </div>
           <div className='lg:w-[33%] w-[90%] h-[250px] border-[1px] border-black flex items-center justify-center gap-[20px] flex-col  px-[40px] py-[10px] text-[black] backdrop-blur-[2px] bg-[#ffffff0b]'>
            <b className='text-[20px] font-semibold text-[#black]'>Digital-First Boutique</b>
            <p>
            We don’t just exist online—we dance through the digital air, our doors always open to you, day or night, offering you an elegant experience as if you were stepping into a physical atelier whenever you wish.
            </p>
          </div>
        </div>
      </div>
      <NewLetterBox/>
      
    </div>
  )
}

export default About
