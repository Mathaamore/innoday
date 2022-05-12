import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <React.StrictMode>
    <MessengerCustomerChat
      pageId="101771305875672"
      appId="1193381531409376"
    />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
