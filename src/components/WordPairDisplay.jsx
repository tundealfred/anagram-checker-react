import React from "react";

const WordPairDisplay = ({ pair }) => {
  return (
    <div>
      <h2>
        Are "{pair[0]}" and "{pair[1]}" anagrams?
      </h2>
    </div>
  );
};

export default WordPairDisplay;
