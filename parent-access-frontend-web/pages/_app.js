import App, { Container } from 'next/app';

class MyApp extends App {
  render() {
    const { Component } = this.props

    return (
      <Container>
        <div> hi </div>
      </Container>
    )
  }
}

export default MyApp