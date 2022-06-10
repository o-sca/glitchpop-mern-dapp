import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
import "./assets/styles/main.css";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { checkWalletisConnected } from "./components/Mint.handler";
import { useEffect } from "react";

const App = () => {
  
  useEffect(() => {
    return () => checkWalletisConnected();
  })

  return (
    <>
      <Header />
      <main>
        <AboutUs />
        <RoadMap />
        <WhoAreWe />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default App;