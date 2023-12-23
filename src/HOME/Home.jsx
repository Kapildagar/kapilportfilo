import Intro from "../Intro/Intro.jsx"
import Skills from '../Skills/Skills.jsx'
import DSA from '../DSA/DSA.jsx'
import Contact from '../Contact/Contact.jsx'
import ProjectContainer from '../container/ProjectContainer.jsx'

export const Home = () => {
  return (
    <>
    <Intro/>
    <ProjectContainer/>
    <Skills/>
    <DSA/>
    <Contact/>
    </>
  )
}
