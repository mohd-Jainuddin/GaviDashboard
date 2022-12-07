import * as React from "react";
import ReactDOM from 'react-dom/client';
import {ContextApi} from './Component/DataTable/CreateContext'
import "./index.css";
import  App  from "./App";
import { BrowserRouter } from "react-router-dom";
// import { HeaderContextApiProvider } from "./Component/HeaderContextApi/HeaderContextApi";
import { ContextApiProvider1 } from "./Component/ContextApiProvider1/ContextApiProvider1";
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>  
    <BrowserRouter>
      {/* <HeaderContextApiProvider> */}
        <ContextApiProvider1>
        <ContextApi>
         <App/>
         </ContextApi>
        </ContextApiProvider1>
      {/* </HeaderContextApiProvider> */}
    </BrowserRouter>
  </React.StrictMode>

);


reportWebVitals();
