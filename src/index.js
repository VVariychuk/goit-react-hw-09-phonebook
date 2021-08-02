import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store from './redux/store'

import App from "./App";
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>  
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


const s ="ZpglnRxqenU"

function accum(s) {  
  let arr = [];
  let string = "";
  let keys = []
  let values = []
 s.toLowerCase().split("").forEach((el, index) => {
    keys.push(el);
    values.push(index + 1);
  });    
  for (let i = 0; i < keys.length; i++){    
    let timelessArr = [];
    for (let j = 0; j < values[i]; j++){
      timelessArr.push(keys[i]);
    };
    arr.push(timelessArr);
  };
  console.log(arr);
  arr.map(el => el.splice(0, 1, el[0].toUpperCase()))
  console.log(arr);
  const slice = arr.map(el => el.join(""))
  string = slice.join("-")
  console.log(string);
  return string;
}


function narcissistic(value) {
 const arr =  value.toString().split("") 
 return  arr.reduce((acc, el) => {    
    acc += (+el) ** arr.length
    return acc
  }, 0) === value
}


const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

function finder(arr) {
  let resultArr = [];
  let timeless = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {      
    timeless = [];
    for (let j = i; j < arr.length; j++) {      
      timeless.push(arr[j]);
      resultArr.push([...timeless]);
    };
  };
  resultArr.forEach(i => {
    let total = i.reduce((acc, el) => acc += el, 0)
    if (count < total) {
      count = total
    }  
  })  
  return count
};

const array = [-1, 3, -26, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a-b);
  console.log(odd);
   return array.map((x) => x % 2 ? odd.shift() : x);
}

function rgb(r, g, b){
  const string = "" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16)
  
  const arr = string.split("")
  
  arr.shift()
  
  const str = arr.join("")
 return str
}


console.log(rgb(300, 255, 255));