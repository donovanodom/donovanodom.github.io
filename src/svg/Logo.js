import React from "react";
import "./logo.css";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      shapeRendering="geometricPrecision"
      viewBox="50 50 300 300"
    >
      <use fill="#e81276" xlinkHref="#B"></use>
      <g fill="none" stroke="#e81276" strokeLinejoin="round" strokeWidth="2">
        <use xlinkHref="#B"></use>
        <use xlinkHref="#C"></use>
        <use x="20" y="-100" xlinkHref="#C"></use>
      </g>
      <g fill="#e81276">
        <use xlinkHref="#C"></use>
        <use x="20" y="-100" xlinkHref="#C"></use>
      </g>
      <defs>
        <path
          id="B"
          d="M205 150l-10 50c-2 10 10 10 10 10h40c10 0 10 10 10 10l-6 30c-2 10-10 10-10 10h-44s-12 0-10-10l-10 50c-2 10 10 10 10 10h50s52 0 60-40l10-50c12-60-40-60-40-60h-50s-12 0-10-10z"
        ></path>
        <path
          id="C"
          d="M95 180l-10 50c-2 10 10 10 10 10h80s12 0 10 10l10-50s0-10-10-10h-80s-12 0-10-10z"
        ></path>
      </defs>
    </svg>
  );
}

export default Logo;
