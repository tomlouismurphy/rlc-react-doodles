import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeBase.css';
import {MainImage} from '../MainImage/MainImage.js';
import {SpecsBar} from '../SpecsBar/SpecsBar.js';

class App extends Component {
  render() {
    return (
      <div className="overall-container">
        <header className="recipe-path">
          <p className="path-information">User > Jason Oliver > Recipe > Easy Creamy Vegan Macaroni and Cheese</p>
        </header>
        <MainImage />
        <SpecsBar />
      </div>
    );
  }
}

export default App;
