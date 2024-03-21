import { Outlet } from "react-router";
import Navbar from "../../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Layouts() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer />
    </>
  )
}
