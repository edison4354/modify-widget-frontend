import React, { Component } from 'react';
// import axios from 'axios';
import './Input.css';

class Input extends Component {
  state = {
    color: '',
    colorOne: '',
  };

  addTodo = () => {
    this.setState({ color: '' });
    this.setState({ colorOne: '' });
  };

  handleChange = (e) => {
    // console.log([e.target.name], e.target.value)
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  render() {
    let { color, colorOne } = this.state;
    return (
      <div class="inputComponent">
        <hr/>
        <p>STYLE</p>
        <label class="labelColor" for="bgColor">Choose the background color: <p>(hex code)</p></label>
        <input type="text" name="color" onChange={this.handleChange} value={color} />
        <label class="labelColor">Choose the main element color:<p>(hex code)</p></label>
        <input type="text" name="colorOne" onChange={this.handleChange} value={colorOne} />
        <button class="inputSave" onClick={this.addTodo}>Save</button>
        <div class="linkContainer">
          <p>COPY LINK (THEN PASTE INTO NOTION, AND CLICK "EMBED")</p>
          <input class="embedLink" value="https://catkin-numerous-slug.glitch.me"/>
        </div>
      </div>
    );
  }
}

export default Input;