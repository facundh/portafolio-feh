import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-centerp-4'>
        <form method='POST' action="https://getform.io/f/a4bf46db-f6fd-4203-a4db-f5d718fe37c7" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-sky-600 text-gray-600'>Contact</p>
                <p className='text-gray-500 py-4'>Submit the form below or shoot me an email - facundhfed@gmail.com</p>
            </div>
        <input className='bg-[#ccd6f6] p-2' type="text" name="name" placeholder='Name' />
        <input className='my-2 p-2 bg-[#ccd6f6]' type="email" name="email" placeholder='Email' />
        <textarea className='bg-[#ccd6f6] `-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-sky-600 hover:border-sky-600 px-4 py-3 my-8 mx-auto flex items-center' type="submit">Let 's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact