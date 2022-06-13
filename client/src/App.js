import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
import "./assets/styles/main.css";

import { useEffect } from "react";
import { connect } from "./components/web3/Wallet.handler";

const App = () => {
  useEffect(() => {
    connect()
  }, [])

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