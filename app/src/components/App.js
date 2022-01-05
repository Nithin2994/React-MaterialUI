import { createTheme, makeStyles, ThemeProvider } from "@mui/material";
import React from "react"
import Header from "./ui/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import theme from './ui/Theme'
import Footer from "./ui/Footer";
import LandingPage from "./ui/LandingPage";
import Database from "./ui/Database";
import Storage from "./ui/Storage";


export default function App() {

  const [value, setValue] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(-1)

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={() => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
          <Route exact path="/Services" component={() => {return <h2>Services</h2>}}/>
          <Route exact path="/Database" component={() => <Database />}/>
          <Route exact path="/Storage" component={() => <Storage />}/>
          <Route exact path="/Caching" component={() => {return <h2>Caching</h2>}}/>
          <Route exact path="/About" component={() => {return <h2>About</h2>}}/>
          <Route exact path="/Contact" component={() => {return <h2>Contact</h2>}}/>
        </Switch>
        <Footer value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </Router>
      
      
    </ThemeProvider>
    
  );
};
