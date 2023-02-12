import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page) 
  if (getLayout) {
    return getLayout(
      <>
        <Component {...pageProps} />
      </>
    )
  }
  return getLayout(
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
