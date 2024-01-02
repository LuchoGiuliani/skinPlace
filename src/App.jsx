import "./App.css";
import {Navbar,Carousel,GridSkins,Footer,StarsCanvas} from "./components";
function App() {
  return (
    <div className="main_container bg-slate-900 h-max ">
      <Navbar  className="z-10"/>
      <Carousel />
      <GridSkins className="overflow-hidden" />
      <Footer />
       {/* <StarsCanvas /> */}
    </div>
  );
}

export default App;
