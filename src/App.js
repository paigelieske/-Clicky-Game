import React, { Component } from 'react';
import Picture from "./components/Picture";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import Message from "./components/Message";
import pictures from "./pictures.json";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    pictures,
    clicked: [],
    score: 0,
    message: ""
  };

  clickedPicture = id => {
    let clicked = this.state.clicked;

    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      console.log(clicked);
      this.setState({ score: this.state.score + 1 });
      this.setState({ pictures: shuffle(pictures) });
      this.setState({ message: "" })

      if (clicked.length === 10) {
        console.log(this.state.score);
        this.setState({
          score: 0,
          clicked: [],
          message: "Congrats - you win!"
        });
      }
    } else {
      console.log(this.state.score);
      this.setState({
        score: 0,
        clicked: [],
        message: "Oops - try again."
      });

    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Warhol Memory Game
          <Scoreboard>Score: {this.state.score}</Scoreboard>
          <Message>{this.state.message}</Message>
        </Title>
        {this.state.pictures.map(picture => (
          <Picture
            id={picture.id}
            key={picture.id}
            image={picture.image}
            clickedPicture={this.clickedPicture}
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;

