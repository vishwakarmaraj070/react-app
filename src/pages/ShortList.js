import React from 'react';
import $ from 'jquery';

import '../assets/pages.css';

export default class ShortList extends React.Component {

  constructor(props) {
    super(props);

    this.ShortListAddHandler = this.ShortListAddHandler.bind(this);
    this.ShortListCancleHandler = this.ShortListCancleHandler.bind(this);

    this.state = ({
      fruits: ['Mango', 'Apple', 'Banana', 'Papaya', 'Guava', 'Graps', 'Cherries', 'Breadfruit', 'Date Fruit', 'Feijoa', 'Kiwifruit', 'Lychee'],
      vegitables: ['broccoli', 'cauliflower', 'corn', 'cucumber', 'eggplant', 'green pepper', 'lettuce', 'mushrooms', 'onion', 'Patato', 'pumpkin', 'red pepper', 'beetroot', 'radish', 'cabbage', 'celery'],
      flowers: ['Ageratum', 'Aconite', 'Alstromeria', 'Aster', 'Browalia', 'Buttercup', 'Butterfly Weed', 'Calendula', 'California Poppy', 'Cleome', 'Columbine', 'Comfrey', 'Delphinium', 'Diascia', 'Dutchman’s Breeches', 'Epimedium'],
      addedFruits: [],
      addedVegitables: [],
      addedFlowers: []
    })
  }

  ShortListAddHandler(e, clicType, index) {
    let value = $(e.target).attr('data-value');
    let Type = clicType;
    let Index = index;
    let fruits = this.state.fruits;
    let vegitables = this.state.vegitables;
    let flowers = this.state.flowers;
    let addedFruits = this.state.addedFruits;
    let addedVegitables = this.state.addedVegitables;
    let addedFlowers = this.state.addedFlowers;
    if (Type == 'fruit') {
      addedFruits.push(value);
      fruits.splice(Index, 1);
      this.setState({
        addedFruits,
        fruits
      })
    }
    else if (Type == 'vegitable') {
      addedVegitables.push(value)
      vegitables.splice(Index, 1);
      this.setState({
        addedVegitables,
        vegitables
      })
    }
    else {
      addedFlowers.push(value);
      flowers.splice(index, 1);
      this.setState({
        addedFlowers,
        flowers
      })
    }
  }

  ShortListCancleHandler(e, index, clicType) {
    let value = $(e.target).attr('data-value');
    let Type = clicType;
    let Index = index;
    let fruits = this.state.fruits;
    let vegitables = this.state.vegitables;
    let flowers = this.state.flowers;
    let addedFruits = this.state.addedFruits;
    let addedVegitables = this.state.addedVegitables;
    let addedFlowers = this.state.addedFlowers;
    if (Type == 'fruit') {
      addedFruits.splice(Index, 1);
      fruits.splice(Index, 0, value);
      this.setState({
        addedFruits,
        fruits
      })
    }
    else if (Type == 'vegitable') {
      addedVegitables.splice(Index, 1);
      vegitables.splice(Index, 0, value);
      this.setState({
        addedVegitables,
        vegitables
      })
    }
    else {
      addedFlowers.splice(Index, 1);
      flowers.splice(Index, 0, value);
      this.setState({
        addedFlowers,
        flowers
      })
    }
  }

  render() {

    return (
      <div className="short-list">
        <div className="shorted-items">
          <div className="row">
            <div className="col-lg-4 mb-lg-0 mb-3">
              <div className="fruits">
                <h4>Fruits</h4>
                <ul className="d-flex flex-wrap p-0">
                  {
                    this.state.addedFruits.map((fruit, index) => {

                      return (
                        <li key={index} data-value={fruit} className="position-relative z-depth-1"
                          onClick={(e) => {
                            e.preventDefault();
                            this.ShortListCancleHandler(e, index, 'fruit');
                          }}
                        >
                          {
                            fruit
                          }
                          <span>X</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
              <div className="vegitables">
                <h4>Vegitables</h4>
                <ul className="d-flex ml-3 flex-wrap p-0">
                  {
                    this.state.addedVegitables.map((vegitable, index) => {

                      return (
                        <li key={index} data-value={vegitable} className="position-relative z-depth-1"
                          onClick={(e) => {
                            e.preventDefault();
                            this.ShortListCancleHandler(e, index, 'vegitable');
                          }}
                        >
                          {
                            vegitable
                          }
                          <span>X</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-3">
              <div className="flower">
                <h4>Flower</h4>
                <ul className="d-flex ml-3 flex-wrap p-0">
                  {
                    this.state.addedFlowers.map((flower, index) => {

                      return (
                        <li key={index} data-value={flower} className="position-relative z-depth-1"
                          onClick={(e) => {
                            e.preventDefault();
                            this.ShortListCancleHandler(e, index, 'flower');
                          }}
                        >
                          {
                            flower
                          }
                          <span>X</span>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-bold red" />
        <div className="shorted-items-container">
          <div className="fruits">
            <h4>Fruits</h4>
            <ul className="d-flex ml-5 flex-wrap">
              {
                this.state.fruits.map((fruit, index) => {
                  return (
                    <li key={index} data-value={fruit} className="text-capitalize position-relative z-depth-1"
                      onClick={(e) => {
                        e.preventDefault();
                        this.ShortListAddHandler(e, 'fruit', index);
                      }}
                    >
                      {
                        fruit
                      }
                      <span>+</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="vegitables">
            <h4>Vegitables</h4>
            <ul className="d-flex ml-5 flex-wrap">
              {
                this.state.vegitables.map((vegitable, index) => {
                  return (
                    <li key={index} data-value={vegitable} className="text-capitalize position-relative z-depth-1"
                      onClick={(e) => {
                        e.preventDefault();
                        this.ShortListAddHandler(e, 'vegitable', index);
                      }}
                    >
                      {
                        vegitable
                      }
                      <span>+</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="flowers">
            <h4>Flower</h4>
            <ul className="d-flex ml-5 flex-wrap">
              {
                this.state.flowers.map((flower, index) => {
                  return (
                    <li key={index} data-value={flower} className="text-capitalize position-relative z-depth-1"
                      onClick={(e) => {
                        e.preventDefault();
                        this.ShortListAddHandler(e, 'flower', index);
                      }}
                    >
                      {
                        flower
                      }
                      <span>+</span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}