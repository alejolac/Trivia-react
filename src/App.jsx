import React, { useState } from "react";
import Categories from "./components/categories.jsx"
import Question from "./components/questions.jsx";
import "./App.css"


function App() {
  const [currentContent, setCurrentContent] = useState("categories");

  const handleCategoryClick = (category) => {
    setCurrentContent(category);
  };

  const renderContent = () => {
    if (currentContent === "categories") {
      return <Categories
        handleState={handleCategoryClick}
      />;
    } else {
      return <Question category={currentContent} handleState={handleCategoryClick} />;
    }
  };

  return (
    <>
      <div className="App">
        {renderContent()}
      </div>
      <footer>
        <p>Hecho y diseñado por <a href="https://www.linkedin.com/in/alejo-lacroix/" target="_blank" rel="noreferrer">Alejo Lacroix</a> </p>
        <div className="social">
          <a target="_blank" href="https://github.com/alejolac/Trivia-react/tree/master"><i className="fa-brands fa-github"></i></a>
          <a target="_blank" href="https://www.linkedin.com/in/alejo-lacroix/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
      </footer>
    </>
  )
}

export default App
