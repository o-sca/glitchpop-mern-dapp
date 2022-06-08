import React, { Component } from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Main from "./views/Main";


export default class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Main />
      <Footer />
      </>
    )
  }
};