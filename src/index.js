import React from "react";
import ReactDOM from 'react-dom';
import { add, sub,mult,div } from "./Calcu";


ReactDOM.render(
<>

  <ul>
    <li> Sum of  two no is { add (30,3)}</li>
    <li> Sub of two no is { sub(30,3)}</li>
    <li> Div of two no is { div(10,3)}</li>
    <li> Mult  of two no is { mult (10,3)}</li>
  </ul>
  </>,
  document.getElementById("root")
);