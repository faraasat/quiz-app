import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QuizDataContextProvider } from './data/quiz-data.context';

ReactDOM.render(
  <React.StrictMode>
    <QuizDataContextProvider>
    <App />
    </QuizDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);      

reportWebVitals();
