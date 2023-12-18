import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Footer,
  Collaboration,
  CarouselImage,
  Transition,
  Services,
  Technical,
  Footers,
} from "./components/index";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="font-Poppins bg-white">
      <Navbar />
      <Home />
      <Collaboration />
      <About />
      <CarouselImage />
      <Teacher />
      <Transition />
      <Services />
      <Technical />
      <Footer />
      <Footers />
    </div>
  );
}

export default App;
