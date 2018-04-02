import React from 'react'
import ReactDOM from 'react-dom'


const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

const products = BUTCHER_PRODUCTS.map(product => {
  return {product}
})

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      <li className="oldercoaster">
        {this.props.content}
      </li>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <p className="infrontofyou">
        {this.props.content}
      </p>
    )

  }
}

export class ButcherShop extends React.Component {
  render () {
    return (
      <li className="butcher-shop">
        {this.props.content}
      </li>
    )
  }
}


ReactDOM.render(
  <div>
    <div id="oldercoaster">
      <p>Two grannies having the time of their life!</p>
      <p>Passengers:</p>
      <ul>
        <OlderCoaster content ={"Agnes"}/>
        <OlderCoaster content = {"Muriel"}/>
      </ul>
    </div>

    <div>
      <InFrontOfYou content = {"You shouldn't look too far."} />
      <InFrontOfYou content = {"Sometimes, the solution is right in front of you."} />
    </div>
    
    <div id="butcher-shop">
    <p>Hello! We have the following products for sale today:</p>
      <ul>
        <ButcherShop content = { BUTCHER_PRODUCTS[0] } />
        <ButcherShop content = { BUTCHER_PRODUCTS[1] } />
        <ButcherShop content = { BUTCHER_PRODUCTS[2] } />
        <ButcherShop content = { BUTCHER_PRODUCTS[3] } />
      </ul>
    </div>
  </div>,
  document.getElementById('root')
)
