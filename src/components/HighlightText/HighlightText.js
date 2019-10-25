import React from "react";

function HighlightText({
  highlightText,
  children,
  backgroundColor = "yellow",
  color = "inherit"
}) {
  const highlightStyle = {
    backgroundColor: backgroundColor,
    color: color
  };
  let result = children;

  let indexOfStart = children
    .toLowerCase()
    .indexOf(highlightText.toLowerCase());
  let indexOfEnd = indexOfStart + highlightText.length;

  let highlightedText = children.substring(indexOfStart, indexOfEnd);
  let textFirstPart = children.slice(0, indexOfStart);
  let textSecondPart = children.slice(indexOfEnd, children.length - 1);

  if (highlightText.toLowerCase() === highlightedText) {
    result = (
      <>
        {textFirstPart}
        <span style={highlightStyle}>{highlightedText}</span>
        {textSecondPart}
      </>
    );
  }

  return <>{result}</>;
}

export default HighlightText;
