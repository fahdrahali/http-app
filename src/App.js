import React, { Component } from 'react';
import './App.css';
import axios from "axios";

class App extends Component {
  state = { 
    posts : []
   };

   async componentDidMount() {
    const { data  } = await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.setState( { posts:data }  )
    }
   
   handleAdd = () => {
     console.log("Add");
   }

  render() { 

    return ( <div>
        <h1>Hello world!</h1>
        <h4>{this.state.posts.map(post => {
          return (<ul>
            <li>{post.title}</li>
          </ul>)
        })}</h4>
    </div> );
  }
}
 

export default App;
