import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//웹이 시작할때 데이터베이스 초기화를 하기위해 import
import "./database/firebase";

// 리덕스와 리덕스 미들웨어 추가
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

// 리듀서 추가
import rootReducer from "./modules";

// Thunk 미들웨어 추가
import ReduxThunk from "redux-thunk";

// store에 연결
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
