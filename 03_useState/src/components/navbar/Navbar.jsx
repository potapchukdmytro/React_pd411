import { navbarStyles, navlinksStyles, authNavStyles } from "./styles";

const Navbar = () => {
    return (
        <div style={navbarStyles}>
            <h1 style={{ flexGrow: 1, margin: "0px 24px" }}>PD411</h1>
            <div style={navlinksStyles}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Page 1</a>
                <a href="/">Page 2</a>
            </div>
            <div style={authNavStyles}>
                <a>Login</a>
                <a>Register</a>
            </div>
        </div>
    );
};

export default Navbar;
