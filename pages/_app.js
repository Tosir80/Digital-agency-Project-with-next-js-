import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <br />
    <br />
    <br />
    <Component {...pageProps} />
    <Footer/>
    </>
  )
}

export default MyApp
