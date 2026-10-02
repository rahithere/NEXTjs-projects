import React from 'react'
import ContactForm from '../form/ContactForm'

function ContactSection() {

  return (
    <section
      className='relative min-h-screen overflow-hidden bg-black px-6 py-20 text-white md:px-10 lg:px-16'
    >

      {/* mouse glow  */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#203E4C]/40 blur-[120px]" />



      <div className='mx-auto w-full max-w-5xl'>

        {/* text container */}
        <div className='mx-auto max-w-3xl text-center my-6 '>
          <h1 className='text-4xl font-bold leading-tight md:text-5xl lg:text-6xl'>Are You Ready For A
            <span className='text-[#2EA9FF] block'>Hunting Partner?</span></h1>
          <p className='mt-6 text-base leading-7 text-slate-300 md:text-lg'><span className='text-[#2EA9FF] font-bold'>“Attack isn't about being aggressive; it's about being relentlessly strategic.”</span> Companies
            like that of yours need to be extremely agile and aggressive with their Organic Marketing to
            be able to overpower the SERP.</p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            But, not everyone is ready to start hunting with us. Find out if you're ready
            for the hunt or still in hustle mode:
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection