import React from 'react'
import './App.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'


class App extends React.Component {
  constructor(){
    super();
    this.state = {input :""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState(
     {input : event.target.value}
    );
   }

render (){
  
  
  return (
    <>
    <Editor input={this.state.input} handleChange={this.handleChange}/>
    <Previewer input={this.state.input} />
    </>
  )
}
}

export default App
