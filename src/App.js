import "./App.css"
import React, { Component } from 'react'
import Counter from './components/Counter'

 class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  increament =()=>{
    this.setState({
      count:this.state.count+1,
    })
  }
  decreament =()=>{
    this.setState({
      count:this.state.count-1,
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Counter Using React Functional Component</h1>
        <Counter increament={this.increament} decreament={this.decreament} count={this.state.count}/>
      </div>
    )
  }
}

export default App

