import { Outlet } from "react-router-dom";
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function Root() {

  return (
    <div className="container mx-auto px-4">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer />
    </div>
  )
}

export default Root;
