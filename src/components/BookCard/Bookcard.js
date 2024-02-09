// BookCard.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const BookCard = ({ book }) => {
  const [isRead, setIsRead] = useState(false);

  const handleToggleStatus = () => {
    setIsRead(!isRead);
  };

  const coverId = book.cover_id || null;
  const coverImageUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <Card
      sx={{
        height: "38vh",
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        alt="Book Cover"
        height="140"
        image={coverImageUrl}
        sx={{ objectFit: "cover" }} // Ensure consistent aspect ratio for images
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: "1 0 auto",
        }}
      >
        <div>
          <Typography sx={{ fontSize: 15 }} variant="h6">
            {book.title || "Unknown Title"}
          </Typography>
          <Typography
            sx={{ fontSize: 15 }}
            variant="body2"
            color="text.secondary"
          >
            Author:{" "}
            {book.author_names
              ? book.author_names.join(", ")
              : "Unknown Author"}
          </Typography>
          <Typography
            sx={{ fontSize: 15 }}
            variant="body2"
            color="text.secondary"
          >
            Published Year: {book.first_publish_year || "Unknown Year"}
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: isRead ? "red" : "inherit" }}
            variant="body2"
          >
            Status: {isRead ? "Read" : "Unread"}
          </Typography>
        </div>
        <Button
          onClick={handleToggleStatus}
          variant={isRead ? "contained" : "outlined"}
          color={isRead ? "success" : "secondary"}
          sx={{
            marginTop: 2,
          }}
        >
          {isRead ? "Read" : "Unread"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
