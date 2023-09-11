import { values } from "@/data/values"

const AboutValues = () => {
  return (
    <>
        <section className='bg-[#171225] mt-[-5vw] pt-20'>
            <div className='w-[90%] mx-auto max-w-7xl'>
                <p className='font-mono uppercase text-lg text-cyan-300 tracking-tight mt-2' data-aos = 'fade-up' >Things_we_live_by</p>
                <h3 className='text-2xl md:text-3xl tracking-tight text-white font-bold'>Our Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4 md:gap-10 gap-y-2">
                    {values.map((value) => (
                      <div key={value.id} className="flex flex-col">
                        <h3 className="text-xl tracking-tight text-white">{value.name}</h3>
                        <p className="text-slate-500 text-base md:text-lg mt-3">{value.description}</p>
                      </div>  
                    ))}
                </div>
            </div>
            <div className="head">
        </div>
        </section>
    </>
  )
}

export default AboutValues