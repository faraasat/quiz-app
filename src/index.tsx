import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuizDataContextProvider } from './data/quiz-data.context';

const loader = document.querySelector(".loader");
const showLoader = () => loader?.classList.remove("loader--hide");
const hideLoader = () => loader?.classList.add("loader--hide");

ReactDOM.render(
  <React.StrictMode>
    <QuizDataContextProvider>
    <App hideLoader={hideLoader} showLoader={showLoader} />
    </QuizDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);      

reportWebVitals();
