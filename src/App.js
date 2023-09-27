import React from "react";
import './App.css';
import Header from "./components/Header";
import PdfView from "./components/PdfView";
import PDF from'../src/assets/JavaNotesForProfessionals - Copy.pdf';

function App() {
  return (
    <div className="App">
      <Header />
      <PdfView pdf={PDF} />
    </div>
  );
}
 
export default App;
