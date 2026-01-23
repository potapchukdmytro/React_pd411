import "./App.css";
import BookListPage from "./pages/booksPage/BookListPage";
import AuthorListPage from "./pages/authorsPage/AuthorsListPage";
import AuthorsCreateForm from "./pages/authorsPage/AuthorsCreateForm";
import { Routes, Route } from "react-router";
import BookCreateForm from "./pages/booksPage/BookCreateForm";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import MainPage from "./pages/mainPage/MainPage";
import DefaultLayout from "./components/layouts/DefaultLayout";
import BookUpdateForm from "./pages/booksPage/BookUpdateForm";
import LoginPage from "./pages/auth/loginPage/LoginPage";
import { useEffect, useState } from "react";

function App() {
    const [isAuth, setIsAuth] = useState(false);

    // auth
    useEffect(() => {
        const authData = localStorage.getItem("auth");
        if (authData) {
            setIsAuth(true);
        }
    }, []);

    // const is = true;

    // 1
    // if (is) {
    //     <div></div>
    // } else {
    //     <h1></h1>
    // }
    // is ? (<div></div>) : (<h1></h1>);


    // 2
    // if (is) {
    //     <div></div>
    // }

    // is && <div></div>;

    return (
        <>
            {/* Маршрути */}
            <Routes>
                <Route path="/" element={<DefaultLayout isAuth={isAuth} />}>
                    <Route index element={<MainPage />} />

                    {/* books */}
                    <Route path="books">
                        <Route index element={<BookListPage />} />
                        <Route path="create" element={<BookCreateForm />} />
                        <Route path="update/:id" element={<BookUpdateForm />} />
                    </Route>

                    {/* authors */}

                    <Route path="authors">
                        <Route index element={<AuthorListPage />} />
                        <Route path="create" element={<AuthorsCreateForm />} />
                    </Route>

                    {/* auth */}

                    {/* if(!isAuth){ retun <Route/> } */}

                    {!isAuth && (
                        <Route
                            path="login"
                            element={<LoginPage setAuthCallback={setIsAuth} />}
                        />
                    )}

                    {/* Якщо вказано шлях якого не існує */}
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
