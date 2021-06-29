import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import foods from './foods.json'


class FoodBox extends React.Component{

render(){
    return (
<div>
        {foods.map((foods, index) => {
            return(

                <div className="box" id={index}>
                <article className="media d-flex">
                  <div className="media-left">
                    <figure className="image is-64x64">
              <img className="imgBox" src={foods.image} />
              
              
                    </figure>
                  </div>
                  <div className="d-flex">
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{foods.name}</strong> <br />
                        <small>{foods.calories} cal</small>
                      </p>
                    </div>
                  </div>
                  
                    <div className="field d-flex">
                      <div className="control">
                        <input className="input" type="number" value="1" />
                      </div>
                      <div className="control">
                        <button className="button is-info">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
                
            )
        })}

</div>







    )
}
}
export default FoodBox