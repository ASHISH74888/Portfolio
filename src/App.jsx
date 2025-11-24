import { BrowserRouter } from "react-router-dom";

import {
  About,
  Achievement,
  Contact,
  Feedbacks,
  Hero,
  Navbar,
  Preloader,
  StarsCanvas,
  Works,
  SmoothScroll,
} from "./components";
import EasterEggs from "./components/EasterEggs";
import SkillKeyboard from "./components/SkillKeyboard";

const App = () => {
  return (
    // <Preloader>
    <BrowserRouter>
      <SmoothScroll>
        <div
          className="relative z-0"
          style={{ backgroundColor: "hsl(222.2 84% 4.9%)" }}
        >
          <EasterEggs />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <StarsCanvas />
          <About />
          <Achievement />
          <SkillKeyboard />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      </SmoothScroll>
    </BrowserRouter>
    // </Preloader>
  );
};

export default App;
