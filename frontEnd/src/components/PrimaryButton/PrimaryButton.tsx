import React from "react";
import "./PrimaryButton.scss";

type Props = {
  text: string;
  onClick?: () => void;
};

const PrimaryButton = ({ text, onClick }: Props) => {
  return (
    <div className='primary-button'  onClick={onClick}>
      {text}
    </div>
  );
};

export default PrimaryButton;
