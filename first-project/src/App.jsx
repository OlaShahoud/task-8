import './App.css'
import focalLogo from './assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faNavicon } from '@fortawesome/free-solid-svg-icons'
import {faFacebook } from '@fortawesome/free-brands-svg-icons'
import {faBehance } from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import game from './../src/assets/gamefor-mobile.png'
import pattern from './../src/assets/pattren.png'
import footer from './../src/assets/fotter.svg'
import markiting from './../src/assets/markrtingpattren.png'
import branding from './../src/assets/brandingpattren.png'
import logo from './../src/assets/logo.png'
import Navbar from './Component/Navbar'
import { useState } from 'react'


function App() {
  const[toggle,setToggle]=useState(false);
  const handle=()=>{
      setToggle(!toggle);
  }
 return (
    <>
   
<nav className='navBar'>
    <div className='container-logo'>
     <img src={focalLogo} className="logo" alt="Focal logo" />
     <h1>Digital marketing agency</h1>
    </div>
    <ul className='menu'>
       <li className='menu-item'><a href="#Home">Home</a></li>
       <li className='menu-item'><a href="#services">Services</a></li>
       <li className='menu-item'><a href="">Portfolio</a></li>
       <li className='menu-item'><a href="#hosting">Clients & Partners</a></li>
       <li className='menu-item'><a href="">X Academy</a></li>
       <li className='menu-item'><a href="">About Us</a></li>
       <li className='menu-item'><a href="#footer">Let's Talk</a></li>
       <li className='menu-item res-menu-item'  onClick={handle}><FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon></li>
     </ul>
   </nav>
   <div className='nav'>
   <ul className= {toggle?'menu-item1':'menuRes'}>
       <li ><a href="#Home">Home</a></li>
       <li><a  href="#services">Services</a></li>
       <li ><a href="#hosting">Portfolio</a></li>
       <li ><a href="">Clients & Partners</a></li>
       <li ><a href="">X Academy</a></li>
       <li><a href="">About Us</a></li>
       <li ><a href="#footer">Let's Talk</a></li>
 </ul>
    
   </div>
<section className='Hero' id='Home'>
  <div  className='hero'>
    <div className='hero-one container'>
    <h1>Hey !! Mario still here, But don’t forget that</h1>
    <p>At focal X agency, we are working to build somthing different. Here you’ll have a group of creative people who specialize in:
      Branding, Digital Marketing, Web/App Development, Ui/Ux
      Content creation, Graphic design, Social media and More........
      So you can take a tour in our website, OR just <span className='bloud'>Press Start :)</span></p>
  </div>
  <div className='hero-two'>
  <img  className='pattern'src={pattern} alt="game" />
  <img  className='game' src={game} alt="game" />
</div>
</div>
<div className='footeer'>
<img className='footter' src={footer} alt="" />
<ul className='list-icone'>
<li><a href="https://www.facebook.com/focal.x.agency/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
<li><a href="https://www.behance.net/focal-x-agency"><FontAwesomeIcon icon={faBehance}></FontAwesomeIcon></a></li>
<li><a href="https://www.linkedin.com/company/focal-x-agency"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
<li><a href="https://www.instagram.com/focal.x.agency"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
<li><a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
</ul>
<p className='title-fot'>© 2021 - 2023 focal X agency All Right Reserved</p>
</div>
</section>
<section className='services' id='services'>
  <h2 className='title-services'> Our Services</h2>
 <div className='services-list-card'> 
   <div className='services-card'>
    <h1 className='title-h1'>Branding</h1>
    <p className='container1'>
      The brand is hope,
    It is also the source of inspiration for everything you do when you
    deal with your customers and that is the important and emotional
    thing. Your Brand and Visual identity represents an intrinsic Value
    to your company.</p>
    <h3>In focal X agency, we provide:</h3>
    <p className='container1'>Visual identity design.</p>
    <p className='container1'> Define Brand Identity.</p>
    <p className='container1'> Define Brand personality.</p>
    <p className='container1'> Building Your brand strategy.</p>
    <p className='container1'> Market research and competitors study.</p>
    <h3 className='container1'>We walk with you from A to Z.</h3>
    <img className='ma-img' src={branding} alt="" />
   </div>
   <div className='services-card '>
   <h1 className='h1-title'>Marketing</h1>
   <p className='container1'>Talk to your customers and tell them you and your company's
      story through us the way you want.
      Let us plan the content that will bring your audience closer to you.
    </p>
    <h3>In our marketing agency, we provide:</h3>
    <ul  className=' list container1'>
    <li>E-mail marketing.</li>
    <li >Affiliate marketing.</li>
    <li>Influencer marketing.</li>
    <li>Market research and Analysis.</li>
    <li>App store optimization ( ASO ).</li>
    <li>Search engine Marketing ( SEM ).</li>
    <li>Search engine optimization ( SEO ).</li>
    <li>Social media marketing & campaigns.</li>
    </ul>
    <img className='ma-img' src={markiting} alt="" />
   </div>
 </div>
</section>
<section className='hosting' id='hosting'>
<h1 className='title-services'> Hosting Pricing</h1>
<div className='hosting-card-list'>
  <div className='hosting-card hosting-card1'>
    <h2>Basic</h2>
    <p>for very small businesses
      and freelancers.</p>
    <ul className='host-list'>
    <li>Disk Space:<span>500 M.B</span></li>
    <li>Bandwidth:<span>500 G.B</span></li>
    <li>SubDomains:<span> Unlimited</span></li>
    <li>Parked Domains:<span>Unlimited</span></li>
    <li>E-mail Accounts:<span>Unlimited</span></li>
    <li>Cpanel (control panel):<span>yes</span></li>
    <li>Money Back Guarantee: <span>14 Days</span></li>
    </ul>
    <button>You will have 1 Gift</button>
  </div>
  <div className='hosting-card hosting-card2'>
    <h2>Pro</h2>
    <p>for Individuals that need sharing
      vlogs or need huge portfolio.</p>
    <ul className='host-list'>
    <li>Disk Space: <span> 3000 M.B</span></li>
    <li>Bandwidth: <span>3 TERA</span></li>
    <li>SubDomains: <span>Unlimited</span></li>
    <li>Parked Domains:<span>Unlimited</span></li>
    <li>E-mail Accounts:<span> Unlimited</span></li>
    <li>Cpanel (control panel):<span>yes</span></li>
    <li>Money Back Guarantee:<span>14 Days</span></li>
    </ul>
    <button>1 Gift per/mo for year</button>
  </div>
  <div className='hosting-card hosting-card3'>
  <h2>Business</h2>
    <p>for Team that need sharing
        and reporting.</p>
    <ul className='host-list'>
    <li>Disk Space:<span>5000 M.B</span></li>
    <li>Bandwidth:<span> 5 TERA</span></li>
    <li>SubDomains:<span>Unlimited</span></li>
    <li>Parked Domains:<span>Unlimited</span></li>
    <li>E-mail Accounts:<span>Unlimited</span></li>
    <li>Cpanel (control panel):<span>yes</span></li>
    <li>Money Back Guarantee:<span>14 Days</span></li>
    </ul>
    <button>3 Gifts per/mo for year</button>
  </div>
  <div className='hosting-card hosting-card4'>
  <h2>Enterprise</h2>
    <p>for large companies that need
       admins & security</p>
    <ul className='host-list'>
    <li className='host-list-item'>Disk Space:<span>10000 M.B</span></li>
    <li className='host-list-item'>Bandwidth:<span>10 TERA</span></li>
    <li className='host-list-item'>SubDomains:<span>Unlimited</span></li>
    <li className='host-list-item'>Parked Domains:<span>Unlimited</span></li>
    <li className='host-list-item'>E-mail Accounts:<span>Unlimited</span></li>
    <li className='host-list-item'>Cpanel (control panel):<span>yes</span></li>
    <li className='host-list-item'>Money Back Guarantee: <span>14 Days</span></li>
    </ul>
    <button>Just Call Us</button>
  </div>
</div>
<div className='hosting-footer'>
  <p>Support all the features of personal websites, corporate sites, news and commercial sites with 24 hours technical support.</p>
  <p>Go Online, choose your plan and Contact us on:contact@focal-x.com | +963 935 033 139</p>
</div>
</section>
<footer className='footer' id='footer'>
  <div className='one-footer'>
  <div className='one-one-footer2'> 
   <div className='one-one-footer'>
      <img src={logo} alt="focalX" />
      <p>. agency</p>
   </div>
   <ul>
   <li className='one-title-footer'>Head Office</li>
   <li>Syria - Latakia - grh2+hjx</li>
     <li> 35.5199518</li>
   </ul>
  </div>
  
  <div className='one-one-footer2'>
   <ul>
   <li className='one-title-footer'>Sales</li>
   <li>contact@focal-x.com</li>
   <li> +963 953 666 056</li>
   <li>Public Relations</li>
   <li>pr@focal-x.com</li>
   <li>+963 953 666 052</li>
   </ul>
  </div>
  <div className='one-one-footer2'>
    <ul>
    <li className='one-title-footer'>Customer Support</li>
    <li>info@focal-x.com
        +963 953 666 054</li>
    <li>Human Resources</li>
    <li>hr@focal-x.com</li>
    </ul>
  </div>
  <div className='one-one-footer2'>
  <ul>
  <li className='one-title-footer'>Useful Links</li>
  <li>Clients & Partners</li>
  <li>Check Certificat ID</li>
  <li>Check for employee</li>
  <li>Our Brand ID guidlines</li>
  </ul>
  </div>
  <div className='one-one-footer2'>
    <h2 className='one-title-footer'>Keep In Touch</h2>
    <ul className='list-icone-footer'>
<li><a href="https://www.facebook.com/focal.x.agency/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
<li><a href="https://www.behance.net/focal-x-agency"><FontAwesomeIcon icon={faBehance}></FontAwesomeIcon></a></li>
<li><a href="https://www.linkedin.com/company/focal-x-agency"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a></li>
<li><a href="https://www.instagram.com/focal.x.agency"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
<li><a href="https://twitter.com/focal_x_agency"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
</ul>
   </div>
</div>
<div className='two-footer'>
  <p>© 2021 - 2023 focal X L.L.C All Right Reserved</p>
  <div className='br'></div>
</div>

</footer>

    </>
  )
}

export default App
