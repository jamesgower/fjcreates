import React from "react";
import { Row, Col, Button } from "reactstrap";
import Carousel from "./Carousel";
import Card from "./Card";

interface DataContainerProps {
  images: any;
  title: string;
}

const DataContainer: React.FC<DataContainerProps> = ({ images, title }) => {
  return (
    <Row style={{ margin: "0 20px" }}>
      <h2 className="data__title">{title}</h2>
      <p
        className="__placeholder"
        style={{
          height: "200px",
          width: "100%",
        }}
      >
        ------ placeholder text for description --------
      </p>
      <Carousel
        options={{
          type: "carousel",
          perView: 5,
          breakpoints: {
            980: {
              perView: 4,
            },
            740: {
              perView: 3,
              peek: 50,
            },
            480: {
              perView: 2,
              peek: 50,
            },
          },
          swipeThreshold: 0,
          dragThreshold: 0,
          autoplay: 5000,
          animationTimingFunc: "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
        }}
        element={title}
      >
        {images.map((image, i) => (
          <Card key={i} src={image.src} title={image.name} />
        ))}
      </Carousel>
    </Row>
  );
};

export default DataContainer;
