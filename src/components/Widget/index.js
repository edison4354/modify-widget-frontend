
import React, { Component } from 'react';
import Input from './Input';

class Todo extends Component {

  render() {
    return (
      <div class='widgetConfigPage'>
        <h2>Notion Widget</h2>
        <Input getTodos={this.getTodos} />
      </div>
    );
  }
}

export default Todo;