import './App.css'
import { Outlet } from "react-router";
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Comments from './components/Comments.jsx'

function App() {

  return (
    // enclose the components with a fragment
    <>
      <Header />
      <Footer />
    </>
  )
}

export default App
