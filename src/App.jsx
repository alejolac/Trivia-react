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
    <div className="App">
      {renderContent()}
    </div>
  )
}

export default App
