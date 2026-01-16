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
        const id = books.reduce((acc, books) => Math.max(acc, books.id), 0) + 1;
        newBook.id = id;
        newBook.isFavorite = false;
        newBook.cover_url = newBook.cover;
        delete newBook.cover;
        const newList = [...books, newBook];
        setBooks(newList);
        localStorage.setItem("books", JSON.stringify(newList));
    }

    const deleteBook = (id) => {
        const newList = books.filter(b => b.id !== id);
        setBooks(newList);
        localStorage.setItem("books", JSON.stringify(newList));
    }

    const setFavorite = (id, favorite) => {
        const newList = [...books];
        const index = newList.findIndex(b => b.id === id);
        if(index !== -1) {
            newList[index].isFavorite = favorite;
            setBooks(newList);
            localStorage.setItem("books", JSON.stringify(newList));
        }
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
                        <BookCard book={b} deleteCallback={deleteBook} favoriteCallback={setFavorite} />
                    </Grid>
                ))}
            </Grid>
            <BookCreateForm createCallback={addNewBook} />
        </Box>
    );
};

export default BookListPage;
