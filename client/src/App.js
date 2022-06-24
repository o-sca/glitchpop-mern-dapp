// import NavBar from "./components/nav/NavBar";
import Footer from "./components/Footer";
import Header from "./components/header";
import AboutUs from "./views/aboutus/";
import RoadMap from "./views/roadmap/";
import WhoAreWe from "./views/whoarewe/";
import FAQ from "./views/faq/";
import Page404 from "./views/404";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {/* <NavBar /> */}
          <Header />
          <main>
            <AboutUs />
            {/* <RoadMap />
            <WhoAreWe />
            <FAQ /> */}
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
