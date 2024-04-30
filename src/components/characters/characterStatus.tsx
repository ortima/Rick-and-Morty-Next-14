import React from "react";
import { PiQuestionThin } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

interface StatusProps {
  status: string;
}
const Status: React.FC<StatusProps> = ({ status }) => {
  switch (status) {
    case "Alive":
      return <GoDotFill size={25} color="#6fff5b" />;
    case "Dead":
      return <GoDotFill size={25} color="#ff1c1c" />;
    case "unknown":
      return <PiQuestionThin size={25} color="white" />;
  }
};

export default Status;
