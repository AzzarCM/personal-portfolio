import { useEffect } from 'react'
import Home from "./pages/Home";
import Aos from "aos";
import 'aos/dist/aos.css'
export default function App() {
  useEffect(() => {
    Aos.init( {duration: 2000 });
  }, [])
  return (
    <Home/>
  )
}
