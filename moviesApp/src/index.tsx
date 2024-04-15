import React from "react";
import { createRoot } from "react-dom/client";
import sample from './stories/sampleData'
import HomePage from "./pages/HomePage";

const movies = [sample, sample, sample, sample, sample, sample, sample];

const App = () => {
  return (
      <HomePage movies={movies} />
  );
};

const rootElement = createRoot(document.getElementById("root")!); 
rootElement.render(<App />);