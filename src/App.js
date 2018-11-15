import React, { Component } from 'react';
import Reactswipes from 'react-swipes';

class App extends Component {
  render() {
    let opt = {
      distance: 250,
      currentPoint: 1,
      autoPlay: false,
      swTouchstart: e => {},
      swTouchmove: e => {},
      swTouchend: e => {
        let data = {
          moved: e.moved,
          originalPoint: e.originalPoint,
          newPoint: e.newPoint,
          cancelled: e.cancelled
        };
        console.log(data)
      }
    }

    return (
      <div className="App">
        <h1>swipes</h1>
        <div className="view-area">
          <div className="swipe-area">
            <Reactswipes className="card-slide" options={opt}>
              {[1,2,3,4,5,6].map((num, index) => {
                return (
                  <div className="item" key={index}>
                    {num}
                  </div>
                )
              })}
            </Reactswipes>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
