// App.js
import React, { useState, useEffect } from "react";
import BookList from "./components/BookList/Booklist";
import SearchBar from "./components/SearchList/Searchlist";
import { Container, Typography, CircularProgress } from "@mui/material";

const App = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "https://openlibrary.org/people/mekBot/books/already-read.json"
        );
        const data = await response.json();
        setBooks(data.reading_log_entries || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    const trimmedQuery = searchQuery?.trim()?.toLowerCase();

    if (trimmedQuery === "") {
      setSearchResults([]);
    } else {
      const results = books?.filter((book) =>
        book?.work?.title?.toLowerCase()?.includes(trimmedQuery)
      );
      setSearchResults(results);
    }
  }, [searchQuery, books]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ marginTop: 2, marginBottom: 2 }}>
        Book Library
      </Typography>
      <SearchBar
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "70vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <BookList
          books={searchQuery ? searchResults : books}
          searchResults={searchResults}
          searchQuery={searchQuery}
        />
      )}
    </Container>
  );
};

export default App;
