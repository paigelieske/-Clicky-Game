import React, { Component } from 'react';
import Picture from "./components/Picture";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
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
    score: 0
  };

  clickedPicture = id => {
    let clicked = this.state.clicked;
    // let score = this.state.score;

    if (clicked.indexOf(id) === -1) {
      clicked.push(id);
      console.log(clicked);
      this.setState({ score: this.state.score + 1 });
      this.setState({ pictures: shuffle(pictures) });

    } else if (this.state.score === 9) {
      console.log(this.state.score);
      this.setState({
        score: 0,
        clicked: []
      });
    } else {
      console.log(this.state.score);
      this.setState({
        score: 0,
        clicked: []
      });

    }
  }


  render() {
    return (
      <Wrapper>
        <Title>Warhol Click
          <Scoreboard>Score: {this.state.score}</Scoreboard>
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

