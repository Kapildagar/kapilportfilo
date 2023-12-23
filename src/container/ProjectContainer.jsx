

const ProjectContainer = () => {
  return (
    <>
      <h1 className="text-3xl text-start my-2 text-[#02C56D] w-fit mx-auto sm:mx-4">--Project</h1>
      <h1 className="text-xl my-2 text-[#808dad68] hover:text-white  w-fit mx-auto sm:mx-4">Following Are My Project:-</h1>
      <div className=" sm:flex sm:flex-row sm:flex-wrap border-none border-red-800  ">
      <div className="border-none rounded-md  flex-col h-80  w-72 sm:w-60 mx-auto my-5 bg-[#171f38] transition duration-300 ease-out hover:ease-in hover:scale-105 cursor-pointer">
           <img className="h-52 w-64 sm:w-56 rounded-md mx-auto  my-3" src="https://askgalore.com/images/Services-imgs/mern-img.png"/>
            <h1 className="text-white text-center text-16px my-2 ">MERN STACK</h1>
            <div className="flex gap-3 justify-center">
            
              <div className="border-none rounded-md hover:bg-white transition duration-300 ease-out hover:ease-in hover:text-black text-white bg-[#808dad68]  px-2 py-1">REACT</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in  px-2 py-1">Node js</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in px-2 py-1">Express</div>
            </div>
        </div>
        <div className="border-none rounded-md  flex-col h-80 w-72 sm:w-60 mx-auto my-5 bg-[#171f38] transition duration-300 ease-out hover:ease-in hover:scale-105 cursor-pointer">
           <img className="h-52 w-64 sm:w-56 rounded-md mx-auto my-3" src="https://codebots.com/generated/_blog/crud/what-are-crud-operations/Crud_Operations_Thumbnail-800-d4cde5194.webp"/>
            <h1 className="text-white text-center text-16px my-2 ">CRUD</h1>
            <div className="flex gap-3 justify-center">
              <div className="border-none rounded-md hover:bg-white transition duration-300 ease-out hover:ease-in hover:text-black text-white bg-[#808dad68]  px-2 py-1">Ejs</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in  px-2 py-1">Node js</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in px-2 py-1">Express</div>
            </div>
        </div>
        <div className="border-none rounded-md  flex-col h-80 w-72 sm:w-60 mx-auto my-5 bg-[#171f38] transition duration-300 ease-out hover:ease-in hover:scale-105 cursor-pointer">
           <img className="h-52 w-64 sm:w-56 rounded-md mx-auto my-3" src="https://ih1.redbubble.net/image.361630087.6358/raf,750x1000,075,t,fafafa:ca443f4786.jpg"/>
            <h1 className="text-white text-center text-16px my-2 ">MOVIE RECOM.</h1>
            <div className="flex gap-3 justify-center">
              <div className="border-none rounded-md hover:bg-white transition duration-300 ease-out hover:ease-in hover:text-black text-white bg-[#808dad68]  px-2 py-1">REACT</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in  px-2 py-1">REDUX</div>
              <div className="border-none rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in px-2 py-1">AJAX</div>
            </div>
        </div>
        {/* <div className="border-none rounded-md  flex-col h-80 w-72 sm:w-60 mx-auto my-5 bg-[#171f38] transition duration-300 ease-out hover:ease-in hover:scale-105">
           <img className="h-52 w-64 sm:w-56 rounded-md mx-auto my-3" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=1200&s=1"/>
            <h1 className="text-white text-center text-16px my-2 ">Project Name</h1>
            <div className="flex gap-3 justify-center">
              <div className="border rounded-md hover:bg-white transition duration-300 ease-out hover:ease-in hover:text-black text-white bg-[#808dad68]  px-2 py-1">Ejs</div>
              <div className="border rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in  px-2 py-1">Node js</div>
              <div className="border rounded-md hover:bg-white hover:text-black text-white bg-[#808dad68] transition duration-300 ease-out hover:ease-in px-2 py-1">Express</div>
            </div>
        </div> */}
      </div>
      <div className=" w-fit mx-auto sm:mx-4">
      <span className="text-[#808dad68] text-center">For More Projects </span><a href="/" className="hover:text-[#02C56D] text-white cursor-pointer underline text-center">Click Here...</a> 
      </div>
    </>
  )
}

export default ProjectContainer