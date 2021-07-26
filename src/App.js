
import './App.css';
import photo from './me.jpg';
import React, { Component } from 'react'

class App extends Component {
  state = {
    Person:{
      fullName:"KADHI Seifeddine",
      bio: "Fullstack JS developer" ,
      imgSrc:"photo" , 
      profession: "Electrical & Embedded software Engineer", 
    },
    isShow:true,
    count:0,
  }
  handelhide=()=>this.setState({isShow : !this.state.isShow, count:0})
  componentDidMount () {
    setInterval(()=>{
     this.setState(count => ({count:this.state.count +1}));
     } , 1000  )
  };
  
  render() {
    return (
      <div className="personne">
        <button onClick={()=> this.handelhide()} > {this.state.isShow ? "Hide" :"Show" } </button>
        { this.state.isShow ? (
        <>
        <h2>{this.state.Person.fullName}</h2>
        <h3>{this.state.Person.bio}</h3>
        <h5> {this.state.Person.profession}</h5>
        <img src={photo} alt="me" />
        </>) : null}
        {this.state.isShow ? 
        <p>{this.state.count}</p>
        : null }
      </div>
    )
  }
}

 
export default App;
