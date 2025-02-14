import React from "react";

export default function Basket() {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path fill="#000000" d="M18 15H7L5.5 6H21l-3 9z" />
      <path
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.5 3m0 0L7 15h11l3-9H5.5z"
      />
      <circle
        cx="8"
        cy="20"
        r="1"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="17"
        cy="20"
        r="1"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
