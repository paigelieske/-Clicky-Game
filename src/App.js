import React, { Component } from 'react';
import Picture from "./components/Picture";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import pictures from "./pictures.json";

class App extends Component {
  state = {
    pictures
  };

  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        {this.state.pictures.map(picture => (
          <Picture
            id={picture.id}
            key={picture.id}
            image={picture.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;

