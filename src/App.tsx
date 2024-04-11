import './App.scss';
//Components
import Link from './components/Link';
import Footer from './components/Footer';
//Images
import picture from './assets/picture-logo.png';
import portfolioLogo from './assets/website.svg';
import linkedinLogo from './assets/linkedin.svg';
import githubLogo from './assets/github.svg';
import fbLogo from './assets/facebook.svg';
import igLogo from './assets/instagram.svg';
import xLogo from './assets/twitter.svg';

function App() {

  return (
    <>
      <main className='main'>
        
        <div className='info'>
          <img src={picture} alt='picture' />
          <h1>Enrique Gutierrez</h1>
          <h3>JavaScript Developer 💻</h3>
        </div>

        <div className='link-c'>
          <Link name='Portfolio 👨‍💻'
          link='#'
          picture={portfolioLogo} />
          <Link name='Linkedin Profile'
          link='#'
          picture={linkedinLogo} />
          <Link name='GitHub Profile 🚀'
          link='#'
          picture={githubLogo} />
        </div>
        
        <div className="socials">
          <a href='#' target='_blank'>
            <img src={fbLogo} alt='facebok profile' width={25} height={25} />
          </a>
          <a href='#' target='_blank'>
            <img src={igLogo} alt='instagram profile' width={25} height={25} />
          </a>
          <a href='#' target='_blank'>
            <img src={xLogo} alt='twitter profile' width={25} height={25} />
          </a>
        </div>
      </main>
      <Footer />
    
    </>
  )
}

export default App
