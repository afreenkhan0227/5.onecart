import React from 'react'
import Title from '../component/Title'
import contact from "../assets/contact.jpg"
import NewLetterBox from '../component/NewLetterBox'

function Contact() {
  return (
    <div className='w-[99vw] min-h-[100vh] flex items-center justify-center flex-col  bg-[#c8b9a9] gap-[50px] pt-[80px]'>
      <Title  text1={'CONTACT'} text2={'US'}/>
      <div className='w-[100%]  flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-[50%] w-[100%] flex items-center justify-center '>
          <img src={contact} alt=""  className='lg:w-[70%] w-[80%] shadow-md shadow-black rounded-sm'/>
        </div>
        <div className='lg:w-[50%] w-[80%] flex items-start justify-center gap-[20px]  flex-col mt-[20px] lg:mt-[0px]'>
        <p className='lg:w-[80%] w-[100%] text-[black] font-bold  lg:text-[20px] text-[20px]'>AHLAM</p>
        <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]'>
          <p>At Ahlam, each abaya is lovingly selected and thoughtfully crafted—so even though we don’t welcome guests into a physical boutique, our online atelier is always open for you. Every thread, pattern, and fold reflects our passion, and our virtual doors are wide beyond business hours.

Whether you’re curious about the feel of the fabric, sizing guidance, styling tips, or simply want to chat about what inspired your favorite abaya, our dedicated team is here for you—always ready to assist with genuine warmth and attention to detail.</p>
          <p> </p>
        </p>
        <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[13px]lg:text-[18px] mt-[10px] font-bold'>
          <p> 📞 Call us: +91-9326486377</p>
          <p> ✉  Email us at: Ahlam@gmail.com</p>
        </p>
        <p className='lg:w-[80%] w-[100%] text-[15px] text-[black] mt-[10px] mb-[-10px] font-bold'>Call Timings:</p>
        <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[15px] mb-[-10px]'>Monday to Saturday, 11:00 AM – 7:00 PM
        </p>
        <p className='lg:w-[80%] w-[100%] text-[black] md:text-[16px] text-[15px]'>Sunday closed
        </p>
        <button className='px-[30px] py-[20px] flex items-center justify-center text-[black] bg-transparent  active:bg-slate-600 rounded-md' ></button>
        </div>
      </div>
      <NewLetterBox/>
      
    </div>
  )
}

export default Contact
