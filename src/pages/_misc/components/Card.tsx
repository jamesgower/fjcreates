/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import Modal from "./Modal";

interface CardProps {
  src: any;
  title: string;
}

const Card: React.FC<CardProps> = ({ title, src }): JSX.Element => {
  const [open, isOpen] = React.useState(false);
  return (
    <>
      <div className="card__container animated fadeIn" onClick={(): void => isOpen(true)}>
        <img className="card__image" src={src} alt={title} />
        <p className="card__text">{title}</p>
      </div>
      {open && (
        <Modal
          isOpen={open}
          closeModal={(): void => isOpen(false)}
          title={title}
          src={src}
        />
      )}
    </>
  );
};

export default Card;
