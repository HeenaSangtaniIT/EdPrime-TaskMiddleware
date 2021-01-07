import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {getCards} from "./card/card.action";
import Posts from "./components/posts/Posts";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      id: "",
      title: "",
      userId: "",
    };
  }
  componentDidMount() {
    // Card API
    this.props.getCards();
  }
 
  render() {
    console.log("this.props.cardData", this.props.cardData, this.props.loading);
    return (
      <div>
        {this.props.loading === false &&
        this.props.cardData.map((item, i) => {
                  return (
                    <Posts
                    postTitle={item.title}
                    postBody={item.body}
                    postId={item.id}
                    userId={item.userId}
                  />
                  );
                })
              }
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    cardData: state.card.cardData,
    loading: state.card.loading
  }
}
export default connect(mapStateToProps, { getCards })(App);

// function App() {
//   useEffect(() => {
    
//   }, [isLogin, error, isLoading]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
