import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";
import Hero from "./views/hero/";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
import Page404 from "./views/404";

import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "./components/web3/Wallet.handler";

const App = () => {
  useEffect(() => {
    connect();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Hero />
          <main>
            <AboutUs />
            <RoadMap />
            <WhoAreWe />
            <FAQ />
          </main>
          <Footer />
        </Route>
        <Route exact path="/verify">
          <h1>Verify</h1>
        </Route>
        <Route component={Page404}></Route>
      </Switch>
    </Router>
  );
};

export default App;
