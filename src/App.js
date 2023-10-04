import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">

        <InvoiceForm/>

    </div>
  );
}}

export default App;
