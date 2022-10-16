import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import HocCounter from './HocCounter';
// import Counter from './Counter';
// import RenderCounter from './RenderCounter';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  <App /></BrowserRouter>
   
  </React.StrictMode>
);


// const Enhanced = HocCounter(Counter);
// root.render(<Enhanced />)

// root.render(<RenderCounter render ={props => <Counter {...props}/>}/>)