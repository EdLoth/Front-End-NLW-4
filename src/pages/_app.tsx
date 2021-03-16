import '../styles/global.css';
import {ChallangesProvider} from '../contexts/ChallangesContent'

export default function MyApp({ Component, pageProps }) {
  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
  )
}
