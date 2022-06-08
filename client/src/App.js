import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
import Mint from "./views/mint/";
import "./assets/styles/main.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <main>
            <AboutUs />
            <RoadMap />
            <WhoAreWe />
            <FAQ />
          </main>
          <Footer />
        </Route>
        <Route exact path="/mint">
          <Mint />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;