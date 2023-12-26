
import React, { createContext, useState, useContext } from 'react';
import './App.css';



const languages = ["JavaScript", "Python", "java", "C++", "C#", "Dot Net"];
  const LanguageContext = createContext({
    languages,
    language: languages[0],
    setLanguage: () => {},
  })

function App() {
  const [language, setLanguage] = useState(languages[0]);
  return (
    <div className="App">
      <LanguageContext.Provider value={{languages, language, setLanguage}} >
        <MainSection />
      </LanguageContext.Provider>
    </div>
  );
}

function MainSection(){
  const {languages, language, setLanguage} = useContext(LanguageContext);
  const currentIndex = languages.indexOf(language);

  const toggleLanguage = () => {
      if(currentIndex === languages.length-1){
          setLanguage(languages[0]);
      }else{
          setLanguage(languages[currentIndex+1]);
      }
  }


  return(
      <div>
          <p id='favoriteLanguage'>{`Favorite Programming Language: ${language}`}</p>
          <button id='changeFavorite' onClick={toggleLanguage}>
              Change language
          </button>
      </div>
  );
}

export default App;
