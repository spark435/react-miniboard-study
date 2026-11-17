import './App.css'
import { Outlet } from "react-router";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    // enclose the components with a fragment
    <div className="layout">
      <Header />
        <Outlet />
      <Footer />
    </div>
  )
}

export default App;