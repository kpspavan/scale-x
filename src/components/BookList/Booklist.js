// BookList.js
import React, { useState } from "react";
import { Grid, Pagination, Container } from "@mui/material";
import BookCard from "../BookCard/Bookcard";

const itemsPerPage = 10;

const BookList = ({ books, searchResults, searchQuery }) => {
  const [page, setPage] = useState(1);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const getDisplayedBooks = () => {
    if (searchQuery) {
      return searchResults;
    } else {
      return books;
    }
  };

  const displayedBooks = getDisplayedBooks();

  const totalItems = displayedBooks.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const slicedBooks = displayedBooks.slice(startIndex, endIndex);

  return (
    <>
      <Grid container spacing={2}>
        {slicedBooks.map((entry, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} sx={{ height: "100%" }}>
            {/* Set a fixed height for the Grid item */}
            <BookCard book={entry.work} />
          </Grid>
        ))}
      </Grid>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          color="primary"
          sx={{ marginTop: 2 }}
        />
      </Container>
    </>
  );
};

export default BookList;
