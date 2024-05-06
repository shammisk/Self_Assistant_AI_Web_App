import React from "react";

const Button = ({ name, type, onClick }) => {
  return (
    <button
      type={type}
      className="w-full bg-teal-500 hover:bg-teal-300 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
