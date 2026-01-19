import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TestUseEffect from "./components/TestUseEffect";
import BookListPage from "./pages/booksPage/BookListPage";
import AuthorListPage from "./pages/authorsPage/AuthorsListPage";

function App() {
    return (
        <>
            <Navbar />
            <BookListPage />
            {/* <TestUseEffect/> */}
            {/* <AuthorListPage /> */}
        </>
    );
}

export default App;
