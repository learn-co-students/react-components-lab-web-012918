import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const products = [<li>{BUTCHER_PRODUCTS[0]}</li>,<li>{BUTCHER_PRODUCTS[1]}</li>,<li>{BUTCHER_PRODUCTS[2]}</li>,<li>{BUTCHER_PRODUCTS[3]}</li>]



// Define these exported classes
export class OlderCoaster extends React.Component {
  // your code here
  render(){
    return(
      React.createElement('div', {className: 'oldercoaster'}, [
        React.createElement('p', {}, 'Two grannies having the time of their life!'),
        React.createElement('p', {}, 'Passengers:'),
        React.createElement('ul', {}, [
          React.createElement('li', {}, 'Agnes'),
          React.createElement('li', {}, 'Muriel')

        ])

      ])
    )
  }
}

export class InFrontOfYou extends React.Component {
  render(){
    return(
      React.createElement('div', {}, [
        React.createElement('p', {}, "You shouldn't look too far."),
        React.createElement('p', {}, "Sometimes, the solution is right in front of you.")

      ])
    )
  }
}

export class ButcherShop extends React.Component {
  render(){
    return (
      React.createElement('div', {className: 'butcher-shop'}, [
        React.createElement('p', {}, 'Hello! We have the following products for sale today:'),
        React.createElement('ul', {}, [
          BUTCHER_PRODUCTS.map(product => <li>{product}</li>)
        ])
      ])
    )
  }
}


ReactDOM.render(
  <div>
    render your components here! Refer back to the previous README if you are lost
  </div>,
  document.getElementById('root')
)
