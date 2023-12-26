import { Link } from "react-router-dom"
import github from "../assets/github.png"

export const ProjectPage = () => {
    return (
        <>
            <h1 className="text-3xl mt-24 w-fit text-[#02C56D] mx-auto ">Project</h1>
            <div className="flex flex-col sm:flex sm:flex-row  gap-5 sm:flex-wrap">
                <div className="bg-[#171f38] w-72 border border-[#808dad68] rounded-md mx-auto my-10 sm:flex sm:flex-col sm:w-[600px] sm:justify-center sm:items-center  hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <h1 className="text-[#93ecc4] my-2 w-fit mx-auto" >E-Commerce WebApp</h1>
                    <p className="text-[#808dad68]  my-2 w-64 sm:w-fit mx-auto px-2">It is an e-commerce web-app built with MERN stack. I developed it just as a hobby. This is a
                     completely functional web-app where one can visit, register, purchase and make a transaction with demo products. Needless to say that this web-app is only for demonstration purpose
                      with all functionalities baked in and  in working state. If you wish to experience this web-app, I encourage you to go ahead and make a demo purchase with the demo credit card provided in the checkout section in cart.</p>
                    <div className="sm:flex  sm:items-start sm:justify-center gap-4">
                        <div className=" rounded-md w-64 h-40 mx-auto mt-4 mb-2">
                            <img className="w-64 h-40 rounded-md" src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=ais" />
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-start ">
                                <h1 className="text-white mx-4 sm:mx-0 ">Frontend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Redux</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React Router DOM</div>
                                </div>
                                <h1 className="text-white mx-4 sm:mx-0 ">Backend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Mongoose</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Express</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Node</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Stripe</div>
                                </div>
                                <h1 className="text-white mx-4 sm:mx-0 ">Authentication</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Json Web Token</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Bcrypt</div>

                                </div>
                            </div>
                        </div>
                    </div>
                  <Link to="https://github.com/Kapildagar/MERN2.git"><div className="h-10 w-fit rounded-md my-4 flex items-center text-xl p-2 gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer mx-4">
                        <h1 className=" text-white ">Click for GitHub</h1>
                        <img className="h-6" src={github} />
                    </div>
                    </Link>  
                </div>
                <div className="bg-[#171f38] w-72 border border-[#808dad68] rounded-md mx-auto my-10 sm:flex sm:flex-col sm:w-[600px] sm:justify-center sm:items-center  hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <h1 className="text-[#93ecc4] my-2 w-fit mx-auto" >CRUD WebApp</h1>
                    <p className="text-[#808dad68]  my-2 w-64 sm:w-fit mx-auto px-2">CRUD is the acronym for CREATE, READ, UPDATE and DELETE. These terms describe the four essential operations for creating and managing persistent data elements, mainly in relational and NoSQL databases.

This post will describe how CRUD operations are used for data processing. We will also show the issues that sysadmins or DevOps engineers may find when monitoring a database.</p>
                    <div className="sm:flex  sm:items-start sm:justify-center gap-4">
                        <div className=" rounded-md w-64 h-40 mx-auto mt-4 mb-2">
                            <img className="w-64 h-40 rounded-md" src="https://www.datocms-assets.com/48294/1691046464-crud-operations-1-crud-operations.png?auto=format" />
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-start ">
                                {/* <h1 className="text-white mx-4 ">Frontend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Redux</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React Router DOM</div>
                                </div> */}
                                <h1 className="text-white mx-4 sm:mx-0">Backend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Mongoose</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Express</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Node</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Embedded JavaScript templates</div>
                                </div>
                                {/* <h1 className="text-white mx-4 ">Authentication</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Json Web Token</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Bcrypt</div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <Link to="https://github.com/Kapildagar/CRUD.git"><div className="h-10 w-fit rounded-md my-4 flex items-center text-xl p-2 gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer  mx-4">
                        <h1 className=" text-white ">Click for GitHub</h1>
                        <img className="h-6" src={github} />
                    </div></Link>
                </div>
                <div className="bg-[#171f38] w-72 border border-[#808dad68] rounded-md mx-auto my-10 sm:flex sm:flex-col sm:w-[600px] sm:justify-center sm:items-center  hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <h1 className="text-[#93ecc4] my-2 w-fit mx-auto" >Movie recommendation WebSite </h1>
                    <p className="text-[#808dad68]  my-2 w-64 sm:w-fit mx-auto px-2">A movie review is an article that is published in a newspaper, magazine, or scholarly work that describes and evaluates a movie. Reviews are
                     typically written by journalists giving their opinion of the movie. Some reviews include score (4 out of 5 stars) or recommendations (thumbs up).
                     Since reviews are printed in many different kinds of publications, you may need to search several sources.</p>
                    <div className="sm:flex  sm:items-start sm:justify-center gap-4">
                        <div className=" rounded-md w-64 h-40 mx-auto mt-4 mb-2">
                            <img className="w-64 h-40 rounded-md" src="https://miro.medium.com/v2/resize:fit:1120/1*t98V5s6uNKVNEde5ZYQemw.jpeg" />
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-start ">
                                <h1 className="text-white mx-4 sm:mx-0">Frontend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Redux</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React Router DOM</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">API FETCH</div>
                                </div>
                                {/* <h1 className="text-white mx-4 sm:mx-0">Backend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Mongoose</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Express</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Node</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Stripe</div>
                                </div>
                                <h1 className="text-white mx-4 sm:mx-0">Authentication</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Json Web Token</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Bcrypt</div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                   <Link to="https://github.com/Kapildagar/MoviesRecomm.git"> <div className="h-10 w-fit rounded-md my-4 flex items-center text-xl p-2 gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer  mx-4">
                        <h1 className=" text-white ">Click for GitHub</h1>
                        <img className="h-6" src={github} />
                    </div></Link>
                </div>
                <div className="bg-[#171f38] w-72 border border-[#808dad68] rounded-md mx-auto my-10 sm:flex sm:flex-col sm:w-[600px] sm:justify-center sm:items-center  hover:scale-105 transition duration-150 ease-out hover:ease-in">
                    <h1 className="text-[#93ecc4] my-2 w-fit mx-auto" >Portfilo </h1>
                    <p className="text-[#808dad68]  my-2 w-64 sm:w-fit mx-auto px-2"></p>
                    <div className="sm:flex  sm:items-start sm:justify-center gap-4">
                        <div className=" rounded-md w-64 h-40 mx-auto mt-4 mb-2">
                            <img className="w-64 h-40 rounded-md" src="https://d3mm2s9r15iqcv.cloudfront.net/en/wp-content/uploads/2021/10/Screenshot-2021-10-21-at-13.43.49.png" />
                        </div>
                        <div>
                            <div className="flex flex-col justify-center items-start ">
                                <h1 className="text-white mx-4 sm:mx-0">Frontend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">React Router DOM</div>
                                </div>
                                {/* <h1 className="text-white mx-4 sm:mx-0">Backend</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Mongoose</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Express</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Node</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Stripe</div>
                                </div>
                                <h1 className="text-white mx-4 sm:mx-0">Authentication</h1>
                                <div className="w-64  border-none border-red-800 mx-auto flex flex-wrap gap-2 justify-start items-center my-4">
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Json Web Token</div>
                                    <div className="text-white bg-[#808dad68]  flex items-center justify-center h-8 p-2 rounded-md text-[14px] text-center w-fit">Bcrypt</div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                   <Link to="https://github.com/Kapildagar/kapilportfilo.git"> <div className="h-10 w-fit rounded-md my-4 flex items-center text-xl p-2 gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer  mx-4">
                        <h1 className=" text-white ">Click for GitHub</h1>
                        <img className="h-6" src={github} />
                    </div></Link>
                </div>

            </div>
        </>
    )
}
