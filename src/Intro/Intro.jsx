import img from '../assets/profilep.png'

const Intro = () => {
  return (
    <section className="border-none  mt-32 mb-9  border-red-600 flex flex-col-reverse sm:flex-row justify-center items-center">
    <div className=" p-6 sm:w-2/4">
       <h1 className='text-3xl bold text-center text-[#02C56D]'>--Hello! <span className='text-2xl bold text-center text-white'>I'm Kapil</span></h1>
       <h2 className='text-2xl-blod text-center text-[#808dad]'>FullStack Devloper</h2>
       <p className="text-center text-[12px] text-[#808dad]">
       Hi there! My name is Kapil Dagar and I’m a software engineer with 6 months
        years of experience in the industry. I love all things tech and coding, I share my knowledge and experience with others.
       </p>
    </div>
    <div className=' p-6  sm:w-2/4 '  >
      <img  className="border-none rounded-full border-black-700 w-56 h-52" src={img}/>
    </div>
    </section>
  )
}
 
export default Intro