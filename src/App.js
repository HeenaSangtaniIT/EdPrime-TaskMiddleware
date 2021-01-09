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
    return (
      <div>
        {this.props.loading === false &&
        this.props.cardData.map((item, i) => {
                  return (
                    <Posts key={item.id}
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
