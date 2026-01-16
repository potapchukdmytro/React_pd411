import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookCreateForm from "./BookCreateForm";
import booksJson from "./books.json";
import { Box, Grid } from "@mui/material";

// sx == style

const BookListPage = () => {
    const [books, setBooks] = useState([]);

    // спрацює тільки при першому рендері
    useEffect(() => {
        // тут знаходиться код який повинен спрацювати тільки один раз
        const localData = localStorage.getItem("books");
        if (localData) {
            setBooks(JSON.parse(localData));
        } else {
            setBooks(booksJson);
            localStorage.setItem("books", JSON.stringify(booksJson));
        }
    }, []);

    const addNewBook = (newBook) => {

    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Grid container spacing={2} mx="100px" my="50px">
                {books.map((b) => (
                    <Grid size={3} key={b.id}>
                        <BookCard book={b} />
                    </Grid>
                ))}
            </Grid>
            <BookCreateForm createCallback={addNewBook} />
        </Box>
    );
};

export default BookListPage;
