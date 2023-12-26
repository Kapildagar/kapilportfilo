import Intro from "../Intro/Intro.jsx"
import Skills from '../Skills/Skills.jsx'
import DSA from '../DSA/DSA.jsx'
import Contact from '../Contact/Contact.jsx'
import ProjectContainer from '../container/ProjectContainer.jsx'
import Resumepage from "../Resume/Resumepage.jsx"

export const Home = () => {
  return (
    <>
    <Intro/>
    <Resumepage/>
    <ProjectContainer/>
    <Skills/>
    <DSA/>
    <Contact/>
    </>
  )
}
