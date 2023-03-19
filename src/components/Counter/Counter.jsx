import React from 'react';
import { Button, Container, Control, Value } from './Counter.styled';

export class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    console.log('Клікнули в плюс 1');
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    console.log('Клікнули в мінус 1');
  };

  render() {
    const { value } = this.state;

    return (
      <Container>
        <Value>{value}</Value>
        <Control>
          <Button type="button" onClick={this.handleDecrement}>
            Зменшити на 1
          </Button>
          <Button type="button" onClick={this.handleIncrement}>
            Збільшити на 1
          </Button>
        </Control>
      </Container>
    );
  }
}
