import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import { GitIcon } from "../components/Icon";
import Site from "../components/Site";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
  return (
    <>
        <Skip />
        <Header />
        <Main>
          <Intro />
          <Skill />
          { GitIcon }
          <Site />
          <Contact />
        </Main>
        <Footer />
    </>
  )
}

export default HomeView