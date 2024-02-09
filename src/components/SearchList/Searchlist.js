// SearchList.js
import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ value, onChange, onSearch }) => {
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <TextField
      label="Search books by title"
      variant="outlined"
      value={value}
      onChange={onChange}
      onKeyUp={handleKeyUp} // Trigger search on Enter key
      fullWidth
    />
  );
};

export default SearchBar;
