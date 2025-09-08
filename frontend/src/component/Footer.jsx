import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh]  md:mb-[0px] bg-[#b3997f] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]  '>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt=""  className='md:w-[180px] md:h-[70px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black] '></p>
            
                </div>
                <p className='text-[20px] text-[#1e2223] hidden md:block'>Ahlam is your refined modest fashion destination, offering elegantly crafted abayas, traditional men’s wear, and charming children’s modest collections—with timeless design and quality that honors every heritage.</p>
                    <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. OneCart Shopping</p>

                  
            </div>
            <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[30px] text-[#1e2223] font-sans '>COMPANY</p> 

                    </div>
                    <ul>
                         {/* <li className='text-[20px] text-[#1e2223] hidden md:block cursor-pointer'>Home</li> */}
                         <li className="text-[20px] text-[#1e2223] hidden md:block text-center md:text-left cursor-pointer">
  Home
</li>

                        {/* <li className='text-[20px] text-[#1e2223] cursor-pointer '>About us</li> */}
                        <li className="text-[20px] text-[#1e2223] cursor-pointer text-left">
  About us
</li>

                        {/* <li className='text-[20px] text-[#1e2223] hidden md:block cursor-pointer'>Delivery</li> */}
                        <li className="text-[20px] text-[#1e2223] hidden md:block cursor-pointer text-left">
  Delivery
</li>

                        {/* <li className='text-[20px] text-[#1e2223] cursor-pointer'>Privacy Policy</li> */}
                        <li className="text-[20px] text-[#1e2223] cursor-pointer text-left">
  Privacy Policy
</li>

                    </ul>
                </div>

                <div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center '>
                     <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[30px] text-[#1e2223] font-sans '>GET IN TOUCH</p>

                    </div>
                     <ul>
                         {/* <li className='text-[20px] text-[#1e2223]'>+91-9326486377</li> */}
                         <li
  className="text-[20px] text-[#1e2223]"
  style={{ textAlign: 'left' }}
>
  +91-9326486377
</li>
                        <li className='text-[20px] text-[#1e2223] hidden md:block text-left'>+91 8652672864</li>
                        {/* <li className='text-[20px] text-[#1e2223] hidden md:block'>+1-123-456-7890</li> */}
                        <li className="text-[20px] text-[#1e2223] hidden md:block text-left">
  Ahlam@gmail.com
</li>

                        {/* <li className='text-[20px] text-[#1e2223] hidden md:block'>admin@Ahlam.com</li> */}
                        <li className="text-[20px] text-[#1e2223] hidden md:block text-left">
  admin@Ahlam.com
</li>

                    </ul>
                </div>

        </div>
        <div className='w-[100%] h-[1px] bg-black'></div>
        <div className='w-[100%] h-[5vh] bg-[#b3997f] flex items-center justify-center'>Copyright 2025@Ahlam.com-All Rights Reserved</div>
      
    </div>
  )
}

export default Footer
