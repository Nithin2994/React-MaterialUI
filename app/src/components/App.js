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


export default function App() {

  const [value, setValue] = React.useState(0)
  const [selectedIndex, setSelectedIndex] = React.useState(-1)

  return (
    <ThemeProvider theme={theme}>
      <Router>
      <Header value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path="/" component={() => {return <h2>Home</h2>}}/>
          <Route exact path="/Products" component={() => {return <h2>Products</h2>}}/>
          <Route exact path="/Mobiles" component={() => {return <h2>Mobiles</h2>}}/>
          <Route exact path="/Laptops" component={() => {return <h2>Laptops</h2>}}/>
          <Route exact path="/Televisions" component={() => {return <h2>Televisions</h2>}}/>
          <Route exact path="/About" component={() => {return <h2>About</h2>}}/>
          <Route exact path="/Contact" component={() => {return <h2>Contact</h2>}}/>
        </Switch>
        <div style={{height:"72vh"}}></div>
        <Footer value={value} selectedIndex={selectedIndex} setValue={setValue} setSelectedIndex={setSelectedIndex}/>
      </Router>
      
      
    </ThemeProvider>
    
  );
};
