import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./pages/Project";

const App = () => {
  return (
    <div className="px-[2rem] flex flex-col gap-[2.5rem]">
      <Header />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
