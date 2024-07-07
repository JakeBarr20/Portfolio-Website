import "../styles/globals.scss";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="wrapper">
      <Navbar></Navbar>
      <About></About>
    </div>
  );
}
