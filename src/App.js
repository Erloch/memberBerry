import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    clicked: [],
    score: 0,
  };

  componentDidMount(){
this.shuffled()
  }

  shuffled = () => {
    const shuffled = this.state.friends
    shuffled.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({friends: shuffled})
  }

  handleClick = event => {
    event.preventDefault();
    let choices = this.state.friends;
    let clicked = this.state.clicked;
    let score = this.state.score;
    
    
    for (var i = 0; i < choices.length; i++) {
      if(parseInt(event.target.id) === choices[i].id) {
        choices[i].clicked=true;
        clicked.push(choices[i])
      
      }
      
    }

    this.setState({
      friends: choices,
      clicked
    }, () => {
      if(this.state.clicked.length === 2 && this.state.clicked[0].name === this.state.clicked[1].name){
      this.removeFriend(this.state.clicked[0].name)
      this.setState({clicked: [], score: (this.state.score + 1)}, () => this.shuffled())
      
      }
      else if (this.state.clicked.length === 2){
        alert("Nope! Keep trying!")
        for (var i = 0; i < choices.length; i++) {
        choices[i].clicked = false
          }
          this.setState({
            friends: choices,
            clicked: [],
          }, () => this.shuffled())
          
        }
      }
    )
      
  }


  removeFriend = name => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.name !== name);
    // Set this.state.friends equal to the new friends array
    setTimeout(() => (this.setState({ 
      friends
    })), 1000);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>
          Member Match Game? Member?
        </Title>
        <Counter>
          Score: {this.state.score}
        </Counter>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            onClick={this.handleClick}
            clicked={friend.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
