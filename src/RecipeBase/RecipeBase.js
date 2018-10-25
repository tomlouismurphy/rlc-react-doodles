import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeBase.css';
import {MainImage} from '../MainImage/MainImage.js';
import {SpecsBar} from '../SpecsBar/SpecsBar.js';
import {TagsBar} from '../TagsBar/TagsBar.js';
import {MainBody} from '../MainBody/MainBody.js';
import {IngredientList} from '../IngredientList/IngredientList.js';

class App extends Component {
  render() {
    return (
      <div className="overall-container">
        <header className="recipe-path">
          <p className="path-information">User > Jason Oliver > Recipe > Easy Creamy Vegan Macaroni and Cheese</p>
        </header>
        <MainImage />
        <SpecsBar />
        <TagsBar />
        <MainBody />
        <div id="separator-1" className="col-sm-10 offset-sm-1"></div>
        <IngredientList />
      </div>
    );
  }
}

export default App;
