import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import bootstrap from 'bootstrap';
import App from './components/app/';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
    }
    // 1й способ: привязка nextYear() к каждому this
    // this.nextYear = this.nextYear.bind(this);

    // 2й способ 
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }))
    // }

  }
  // 3й способ 
  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  // к 1му способу
  // nextYear() {
  //   //всегда используем setState()
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }
  render() {
    const { name, surname, link } = this.props;
    const { years } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname},  years={years}</h1>
        <a href={link}>My profile</a>
      </React.Fragment>
    )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name='John' surname='Smith' link='Facebook.com' />
      <WhoAmI name='Gordon' surname='Toss' link='Google.com' />
      <WhoAmI name='Fred' surname='Brit' link='Twitter.com' />

    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < App />
  </React.StrictMode>
);

