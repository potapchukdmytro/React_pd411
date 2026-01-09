import Boxes from "../../boxes/Boxes";
import { useState } from "react";

const MainPage = () => {
    const [text, setText] = useState("You text");
    const [inputText, setInputText] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const setTextHandle = () => {
        setText(inputText);

        console.log(email);
        console.log(password);
        
    }

    const changeTextHandle = (event) => {
        const value = event.target.value;
        setInputText(value);
    }    

    return (
        // <Boxes/>
        <>
            <h1 style={{ textAlign: "center" }}>{text}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                {/* <input value={inputText} onChange={(event) => setInputText(event.target.value)} /> */}
                <input value={inputText} onChange={changeTextHandle} />
                <button onClick={setTextHandle}>Change text</button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div>
                    <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <input value={password} onChange={(event) => setPassword(event.target.value)}/>
                </div>
            </div>
        </>
    );
};

export default MainPage;
