import React from 'react'

function NewLetterBox() {
    const handleSubmit = ()=>{
        e.preventDefault()
    }
  return (
    <div className='w-[100%] h-[40vh]  bg-[#c8b9a9] flex items-center justify-start gap-[10px] flex-col'>
      <p className='md:text-[30px] text-[20px] text-[black] font-semibold px-[20px]'>Subscribe to Ahlam </p>
      <p className='md:text-[18px] text-[14px] text-center text-black font-semibold px-[20px]'>Join Ahlam for exclusive elegance—first access, special savings, and subtle inspirations delivered right to you.</p>
      <form action="" onSubmit={handleSubmit} className='w-[100%] h-[30%] md:h-[50%] flex items-center justify-center mt-[20px] gap-[20px] px-[20px]'>
        <input type="text" placeholder='Enter Your Email' className='placeholder:text-[black] bg-[#b3997f] w-[600px] max-w-[60%] h-[40px]  px-[20px] rounded-lg shadow-sm shadow-black' required />
        <button type='submit' className='text-[15px] md:text-[16px] px-[10px] md:px-[30px] py-[12px] md:py-[10px]  hover:bg-[#c8b9a9] cursor-pointer bg-[#b3997f]  text-black flex items-center justify-center gap-[20px]  border-[1px] border-[#80808049]  rounded-lg shadow-sm shadow-black'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewLetterBox
