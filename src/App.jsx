import { useState } from 'react'
import mypic from '../public/mypic.jpeg'
import './App.css'

function App() {
    const [isNavOpen, setIsNavOpen] = useState(false)
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen)
    }

  return (
    <>
      <header>
        <div className="about-me">

            <div className="intro">
                <h1>HUZAIFA ADIL AKRAM</h1>
                <p>BSCS student with a passion for ethical hacking and cybersecurity, currently expanding my skills in web development and assembly language.</p>
            </div> 

            <div className="mypic">
                <img className="profile-pic" src= {mypic} alt=""/>
            </div>

        </div>
    
        
        <button className="hamburger" onClick={toggleNav}>
        &#9776;
        </button>
        <nav className={`side-nav ${isNavOpen ? 'open' : ''}`}>
                <li><a href="#education">Educational History</a></li>
                <li><a href="#skills">Professional Skills</a></li>
                <li><a href="#projects">Professional Projects</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#life-ambitions">Life Ambitions</a></li>
                <li><a href="#effort-for-country">Efforts for Country</a></li>
                <li id="right"><a href="#contact">Contact Me</a></li>
        </nav>
    </header> 

    <div id='education'>
        <h2>Education History</h2>
        <table>
            <thead>
                <th>SR. No.</th>
                <th className="deg">Degree Title</th>
                <th>Passing Year</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </thead>
            <tr>
                <td>1.</td>
                <td className="deg">Matriculation</td>
                <td>2019</td>
                <td>1100</td>
                <td>1000</td>
                <td>90%</td>
            </tr>
            <tr>
                <td>2.</td>
                <td className="deg">Fsc Pre Engineering</td>
                <td>2021</td>
                <td>1100</td>
                <td>688</td>
                <td>68%</td>
            </tr>

            <tr>
                <td>3.</td>
                <td className="deg">BSCS</td>
                <td>ONGOING</td>
                <td>4</td>
                <td>.</td>
                <td>.</td>
            </tr>
        </table>
    </div>

    <div id="skills">
        <h2>Skills</h2>
        <ol>
            <li>C++</li>
            <li><i className="fa-brands fa-python"></i> Python</li>
            <li><i className="fa-brands fa-js"></i> JavaScript</li>
            <li>Assembly language</li>
            <li><i className="fa-brands fa-microsoft"></i> Microsoft Office</li>

        </ol>
    </div>


    <div id="projects">
        <h2>Professional Project</h2>
        <ol>
            <li><a href="https://huzaifa-akram.github.io/Tindog-HTML_CSS/">Tindog Clone Project</a></li>
            <li><a href="https://github.com/Huzaifa-Akram/WILDLIFE-CONSERVATION-DATABASE">WILDLIFE CONSERVATION DATABASE</a></li>
            <li><a href="https://github.com/Huzaifa-Akram/OOP-Cpp-FinalProject">C++ Project</a></li>
            <li><a href="">Web Agency Project</a></li>
        </ol>
    </div>

    <div id="hobbies">
        <h2>Hobbies</h2>
        <ol className="bullet">
            <li>Reading</li>
            <li>Coding</li>
            <li>Travelling</li>
            <li>Photography</li>
        </ol>
    </div>

    <div id='life-ambitions'>
        <h2>Life Ambitions</h2>
        <ul>
            <li className="li-heading">Achieved:
                <ol className="bullet">
                    <li>Graduated from high school</li>
                    <li>Learned programming</li>
                    <li>Built my first website</li>
                    <li>Started my degree in CS</li>
                </ol>
            </li>
            <li className="li-heading">Struggling:
                <ol className="bullet">
                    <li>Mastering cybersecurity</li>
                    <li>Contributing to open-source projects</li>
                    <li>Launching my own startup</li>
                    <li>Becoming a recognized ethical hacker</li>
                </ol>
            </li>
        </ul>
    </div>

    <div id='effort-for-country'>
        <h2>Efforts for Country</h2>
        <ul>
            <li className="li-heading">Succeeded:
                <ol className="bullet">
                    <li>Volunteered in local community projects</li>
                    <li>Educated others about cybersecurity</li>
                    <li>Participated in tech forums</li>
                    <li>Promoted coding in local schools</li>
                </ol>
            </li>
            <li className="li-heading">Struggling:
                <ol className="bullet">
                    <li>Creating a tech-based charity</li>
                    <li>Starting educational YouTube channel</li>
                    <li>Helping students access learning resources</li>
                    <li>Promoting digital literacy</li>
                </ol>
            </li>
        </ul>
    </div>

    <footer id="contact" className="full-width">
        <p>Contact me at: huzaifaakram@gmail.com</p>
        <div className="social-icons">
            <a href="https://github.com/Huzaifa-Akram" target="_blank"><i className="fab fa-github fa-cog"/></a>
            <a href="https://www.linkedin.com/in/huzaifa-akram-68b223326/" target="_blank"><i className="fab fa-linkedin fa-cog"></i></a>
            <a href="https://www.facebook.com/huzaifa.akram.982" target="_blank"><i className="fa-brands fa-facebook fa-cog"></i></a>
            <a href="https://www.instagram.com/zaifa_s_/" target="_blank"><i className="fa-brands fa-instagram fa-cog"></i></a>
            <a href="https://wa.me/qr/GRDZHOXMIIUCC1" target="_blank"><i className="fa-brands fa-whatsapp fa-cog"></i></a>

        </div>
    </footer>
    </>
  )
}

export default App
