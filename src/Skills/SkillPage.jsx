

const SkillPage = () => {
    return (
        <>
            <h1 className="text-4xl text-[#02C56D] w-fit mx-auto  mt-[120px]">SKILLS</h1>
            <h1 className="text-3xl text-white w-fit mx-auto my-3 sm:my-5">Professional Skills</h1>
            <div className="sm:flex sm:flex-wrap sm:justify-center sm:w-fit mx-auto sm:gap-10">
                <div>
                    <div className="flex flex-col  w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">HTML</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[150px] sm:left-[230px]">90%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[200px] bg-[#02C56D] rounded-lg sm:w-72">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">CSS3/TAILWIND CSS</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[30px] sm:left-[115px]">80%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[175px] bg-[#02C56D] rounded-lg sm:w-[260px]">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">JavaScript</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[80px] sm:left-[160px]">75%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[150px] bg-[#02C56D] rounded-lg sm:w-[240px]">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">NODE JS</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[85px] sm:left-[160px]">75%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[150px] bg-[#02C56D] rounded-lg sm:w-[240px]">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">REACT</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[70px] sm:left-[160px]">70%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[120px] bg-[#02C56D] rounded-lg sm:w-[220px]">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">EXPRESS</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[60px] sm:left-[160px]">72%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[125px] bg-[#02C56D] rounded-lg sm:w-[230px]">
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-[280px] sm:w-96 mx-auto cursor-pointer my-3">
                        <div className="flex">
                            <h1 className="text-[#808dad68] hover:text-white">MONGOOSE</h1>
                            <h1 className="text-[#808dad68] hover:text-white relative left-[10px] sm:left-[80px]">60%</h1>
                        </div>
                        <div className="border-2 border-[#5e76be] h-[9px] sm:h-[10px] rounded-lg w-[280px]  sm:w-96">
                            <div className="sm:h-[8px] h-[6px] w-[100px] bg-[#02C56D] rounded-lg sm:w-[180px]">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <h1 className="text-white text-3xl w-fit mx-auto my-5">Personal Skills</h1>
            <div className="w-fit flex flex-wrap mx-auto justify-center gap-4 my-3 cursor-pointer">
                <div className=" flex  items-center justify-center  rounded-full w-[150px] h-[150px] bg-[#9cd9be] hover:bg-[#02C56D]  my-2">
                    <div className=" w-[135px] h-[135px] rounded-full bg-[#0E1630] flex justify-center items-center">
                        <h1 className="text-white">Problem-solving</h1>
                    </div>
                </div>
                <div className=" flex  items-center justify-center  rounded-full w-[150px] h-[150px] bg-[#9cd9be] hover:bg-[#02C56D]  my-2">
                    <div className=" w-[135px] h-[135px] rounded-full bg-[#0E1630] flex justify-center items-center">
                        <h1 className="text-white">Teamwork</h1>
                    </div>
                </div>
                <div className=" flex  items-center justify-center  rounded-full w-[150px] h-[150px] bg-[#9cd9be] hover:bg-[#02C56D]  my-2">
                    <div className=" w-[135px] h-[135px] rounded-full bg-[#0E1630] flex justify-center items-center">
                        <h1 className="text-white">Active listening</h1>
                    </div>
                </div>
                <div className=" flex  items-center justify-center  rounded-full w-[150px] h-[150px] bg-[#9cd9be] hover:bg-[#02C56D]  my-2">
                    <div className=" w-[135px] h-[135px] rounded-full bg-[#0E1630] flex justify-center items-center">
                        <h1 className="text-white">Adaptability</h1>
                    </div>
                </div>
                <div className=" flex  items-center justify-center  rounded-full w-[150px] h-[150px] bg-[#9cd9be] hover:bg-[#02C56D]  my-2">
                    <div className=" w-[135px] h-[135px] rounded-full bg-[#0E1630] flex justify-center items-center">
                        <h1 className="text-white">Critical thinking</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillPage