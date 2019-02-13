import React from "react";

import buttonStyle from "./ScrollButton.css";

export function ScrollButton(props) {
  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      id="toTop"
      title="Go to top"
      style={buttonStyle}
      onClick={scrollToTop}
    >
      {"\u2191"}
    </button>
  );
}
