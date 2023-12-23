


import './App.css'
// import ProjectContainer from './container/ProjectContainer.jsx'
// import { ProjectPage } from './container/ProjectPage.jsx'
import NavBar from './navbar/Navbar.jsx'
// import SkillPage from './Skills/SkillPage.jsx'
// import Intro from './Intro/Intro.jsx'
// import Skills from './Skills/Skills.jsx'
// import DSA from './DSA/DSA.jsx'
// import Contact from './Contact/Contact.jsx'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer/Footer.jsx'

function App() {

  return (
    <>
    <div className="min-w-80 max-w-3xl mx-auto mb-[20px] ">
    <NavBar/>
    <Outlet/>
     {/* <Intro/>
    <ProjectContainer/>
    <Skills/>
    <DSA/>
    <Contact/> */}
    {/* <ProjectPage/> */}
    
    </div>
    {/* <SkillPage/> */}
    <footer>
    <h1 className="h-14 relative bottom-0 sm:h-12 text-center w-full   shadow-lg shadow-white text-[#808dad68]  text-[16px] py-2  sm:my-0">© Copyright 2023 - Developed by Kapil. All right reserved.</h1>
    </footer>
    
    </>

  )
}

export default App
