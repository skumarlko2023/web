// import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/layout/NavbarSection';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import TopNavbarSection from './components/layout/TopNavbarSection';
import Home from './components/Home';
import FooterSection from './components/layout/FooterSection';
import CopyRightSection from './components/layout/CopyRightSection';
import AboutSection from './components/About';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
function App() {
  return (
    <HashRouter>
      <TopNavbarSection />
      <NavbarSection />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <FooterSection />
      <CopyRightSection />
    </HashRouter>
  );
}

export default App;
