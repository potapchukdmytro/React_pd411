import "./App.css";
import Navbar from "./components/navbar/Navbar";
import TestUseEffect from "./components/TestUseEffect";
import BookListPage from "./pages/booksPage/BookListPage";

function App() {
    return (
        <>
            <Navbar />
            <BookListPage />
            {/* <TestUseEffect/> */}
        </>
    );
}

export default App;
