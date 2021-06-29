import React from 'react';

import FoodBox from './FoodBox';
import foods from './foods.json';

class AddFood extends React.Component {
  state = {
    newArr: foods,
    isValid: false,
    name: "",
    calories: 0,
    image:"",
    quantity:0
  };



  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClick = (event) => {

   
    const obj = {'name':this.state.name, 'calories': this.state.calories, 'image': this.state.image};
    const clone = [...this.state.newArr];
    clone.push(obj);
    this.setState({ newArr : clone });
    event.preventDefault()
    console.log(clone);
  };


  addClick = () => {
    if (this.state.isValid === false) {
      this.setState({ isValid: !this.state.isValid });
    }else {
        this.setState({ isValid: false });
    }
  }





  render() {
    return (
      <div>
        <h1>IronNutrition</h1>
        <div>
          <button onClick={this.addClick}>New Food</button>
          {this.state.isValid && (
            <form>
              <input
                onChange={this.handleChange}
                value={this.state.name}
                placeholder="insert a new food"
                name="name"
              ></input>
              <input
                type="number"
                onChange={this.handleChange}
                value={this.state.calories}
                placeholder="insert the calories"
                name="calories"
              ></input>
              <input
                type="url"
                onChange={this.handleChange}
                value={this.state.image}
                placeholder="insert a image of your food"
                name="image"
              ></input>
            </form>
          )}
          <button onClick={this.handleClick}> Refresh </button>
          
        </div>
        <FoodBox />
      </div>
    );
  }
}

export default AddFood;
