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
    </>
  )
}

export default MyApp
