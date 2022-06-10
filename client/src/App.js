import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
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
      </Switch>
    </Router>
  );
};

export default App;