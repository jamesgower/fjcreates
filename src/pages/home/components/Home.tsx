import React, { FC } from "react";
import { Container, Button } from "reactstrap";
import landingImg from "../img/landing.png";
import logo from "../img/logo.png";
import background from "../img/background.jpg";
import NavBar from "../../_misc/components/NavBar";
import kids from "../../_misc/img/creates/creations1.jpg";
import frame from "../../_misc/img/creates/creations2.jpg";
import gdad from "../../_misc/img/creates/creations3.jpeg";
import gdad2 from "../../_misc/img/creates/creations4.jpeg";
import rio from "../../_misc/img/creates/creations9.jpg";
import cake1 from "../../_misc/img/cakes/cake1.jpg";
import cake2 from "../../_misc/img/cakes/cake2.jpg";
import cake4 from "../../_misc/img/cakes/cake4.jpg";
import cake5 from "../../_misc/img/cakes/cake5.png";
import cake6 from "../../_misc/img/cakes/cake6.jpeg";
import DataContainer from "../../_misc/components/DataContainer";

const Home: FC = () => {
  const creationsImages = [
    {
      name: "Personalised Frame - Grandad",
      src: gdad,
    },
    {
      name: "Personalised Frame - Rio",
      src: rio,
    },
    {
      name: "Personalised Frame - Grandad 2",
      src: gdad2,
    },
    {
      name: "Personalised Frame - Kids",
      src: kids,
    },
    {
      name: "Personalised Rainbow Frame",
      src: frame,
    },
  ];
  const cakesImages = [
    {
      name: "Personalised Princess Cake",
      src: cake1,
    },
    {
      name: "Personalised Ferrero Rocher Cake",
      src: cake2,
    },
    {
      name: "Personalised Minions Cake",
      src: cake4,
    },
    {
      name: "Personalised Teddy Cake",
      src: cake5,
    },
    {
      name: "Personalised Ferror Rocher Cake 2",
      src: cake6,
    },
  ];
  return (
    <>
      <NavBar />
      <div
        style={{
          background: `url(${background}) no-repeat center center fixed`,
        }}
      >
        <div className="landing__image-container">
          <img src={logo} className="landing__logo" alt="Francesca Jade Creates" />
          <img
            src={landingImg}
            className="landing__image"
            alt="hand crafted mum name frame"
          />
        </div>
        <div className="landing__info">
          <h1 className="landing__title">Francesca Jade Creates</h1>

          <div className="landing__creates">
            <i className="fas fa-palette landing__icon" />
            <p className="creations__text">
              Personalised hand-crafted items including cards, name frames &amp; other
              creations.
            </p>
          </div>
          <div className="landing__cakes">
            <i className="fas fa-birthday-cake landing__icon" />
            <p className="creations__text">
              Delicious home-baked cakes for every occasion. Choose the cake type and
              theme, and we&apos;ll do the rest!
            </p>
          </div>
          <div className="landing__buttons">
            <Button outline className="button__creations">
              Explore Creations
            </Button>
            <Button outline className="button__cakes">
              Explore Cakes
            </Button>
          </div>
        </div>
        <Container fluid className="creations__container">
          <DataContainer images={creationsImages} title="Creations" />
          <DataContainer images={cakesImages} title="Cakes" />
        </Container>
      </div>
    </>
  );
};

export default Home;
