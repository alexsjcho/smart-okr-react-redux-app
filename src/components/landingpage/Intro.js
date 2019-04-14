import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

export default class Intro extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }
  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Container>
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://www.businessmagazinegainesville.com/wp-content/uploads/2018/03/How-to-Achieve-Your-Goals-Within-a-Specific-Timeframe.jpg"
              alt="goal-no-plan-wish"
            />
            <Carousel.Caption>
              <h3>Automate Goals</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2018Q1/smart-goals/smart-goals-header@2x.png"
              alt="what-are-okrs"
            />

            <Carousel.Caption>
              <h3>Take Action</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src="https://cdn-images-1.medium.com/max/2600/1*HvlZayCeipATnffD1V1n1g.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Achieve Your Goals</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}
