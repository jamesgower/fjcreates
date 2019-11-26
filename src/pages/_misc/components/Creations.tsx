import React from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar";
import background from "../../home/img/background.jpg";
interface Props {}

const Creations: React.FC<Props> = () => {
  return (
    <div
      style={{
        background: `url(${background}) no-repeat center center fixed`,
        minWidth: "100vh",
      }}
    >
      <NavBar />
      <Container fluid className="creations__container">
        <h1 className="data__title">Creations</h1>
        <p className="__placeholder" style={{ height: "300px" }}>
          --- Description Container ----
        </p>
        <div className="__placeholder" style={{ height: "500px" }}>
          ----- Images Container -----
        </div>
      </Container>
    </div>
  );
};

export default Creations;
