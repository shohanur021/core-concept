import logo from './logo.svg';
import './App.css';

function App() {
  var headerStyle = {
    backgroundColor:"red",
    color:"white"
  }
  var student = {
    name:"Shohan",
    age:20
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="heading" style={headerStyle}>My first paragraph.</h3>
        <p style={{border:"2px solid yellow",color:"white"}}>I am sajib</p>
        <p>I am {student.name}.My age is {student.age} not {12+13}</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  var style = {
    border:"2px solid red",
    margin:"5px",
    padding:"0px 10px"
  }
  return(
    <div style={style}>
      <h2>I am a person</h2>
      <p>Hey listen to me.</p>
    </div>
  )
}

export default App;
