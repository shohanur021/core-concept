import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  var headerStyle = {
    backgroundColor: "red",
    color: "white"
  }
  var student = {
    name: "Shohan",
    age: 20
  }
  const products = [
    { name: "Photoshop", price: "$99.25" },
    { name: "Illustrator", price: "$50.50" },
    { name: "Pdf reader", price: "$60.33" }
  ]

  const names = ['Salman', 'Razzak', 'Jony', "Sohel"];


  return (
    <div className="App">
      <header className="App-header">
        <h3 className="heading" style={headerStyle}>My first paragraph.</h3>
        <p style={{ border: "2px solid yellow", color: "white" }}>I am sajib</p>
        <p>I am {student.name}.My age is {student.age} not {12 + 13}</p>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Student name="Sajib" roll="127"></Student>
        <Student name="Samina" roll="129"></Student>
        <Student name="Shafa" roll="118"></Student>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
        </ul>
        <ul>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Person() {
  var style = {
    border: "2px solid red",
    margin: "5px",
    padding: "0px 10px"
  }
  return (
    <div style={style}>
      <h2>I am a person</h2>
      <p>Hey listen to me.</p>
    </div>
  )
}

function Student(props) {
  var stuStyle = {
    border: "2px solid blue",
    margin: "5px",
    padding: "0px 10px",
    color: "yellow"
  }
  return (
    <div style={stuStyle}>
      <h2>My name is : {props.name}</h2>
      <h3>I like {props.roll}</h3>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left',
    margin: "10px"
  }
  const priceStyle = {
    color: "red"
  }

  return (
    <div style={productStyle}>
      <h3>{props.product.name}</h3>
      <h4 style={priceStyle}>{props.product.price}</h4>
    </div>
  )
}

function Counter() {
  const [count, setcount] = useState(10);
  const handleClick = () => {
    setcount(count + 1)
  }
  const handleMouseMove = () => {
    if (count > 0) {
      setcount(count - 1)
    }
  }


  return (
    <div >
      <h1>count : {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onMouseMove={handleMouseMove}>Decrease</button>
    </div>
  )
}

function Users() {
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  }, [])

  return (
    <div style={{ border: '1px solid red',marginTop:'50px'}}>
      <h3>dynamic users : {user.length}</h3>
      <ul>
        {
          user.map(user => <li>{user.name}</li>)
        }
      </ul>
      <ul>
        {
          user.map(user => <li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
