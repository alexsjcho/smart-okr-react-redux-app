import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";

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
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}>
        <Carousel.Item>
          <img
            style={{ width: "60rem" }}
            className="d-block w-100"
            src="https://www.yourtrainingedge.com/wp-content/uploads/2012/01/Fotolia_92321615_Subscription_Monthly_M.jpg"
            alt="goal-no-plan-wish"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "60rem" }}>
          <img
            className="d-block w-100"
            src="https://activerain-store.s3.amazonaws.com/blog_entries/127/5320127/original/OKRs.png?1547466712"
            alt="what-are-okrs"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ width: "60rem" }}>
          <img
            className="d-block w-100"
            src="https://cdn-images-1.medium.com/max/2600/1*HvlZayCeipATnffD1V1n1g.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
