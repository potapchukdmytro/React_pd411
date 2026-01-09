import { useState } from "react";

const randomRgb = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

const Boxes = () => {
    // useState - хук який відповідає за стан компоненту
    // 1
    const [firstColor, setFirstColor] = useState("cyan");
    const [secondColor, setSecondColor] = useState("yellow");

    // setFirstColor("blue"); - буде вічний цикл
    // тому що set викликає рендер компоненту а рендер викликає set

    // 2
    // const color = "yellow"

    const changeColor1Handle = () => {
        const randomColor = randomRgb();
        setFirstColor(randomColor);
    };

    const changeColor2Handle = () => {
        const randomColor = randomRgb();
        setSecondColor(randomColor);
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "32px 0px",
                flexDirection: "column",
            }}
        >
            <div>
                <div
                    style={{
                        display: "inline-block",
                        width: "150px",
                        height: "150px",
                        margin: "0px 8px",
                        backgroundColor: firstColor,
                    }}
                ></div>
                <div
                    style={{
                        display: "inline-block",
                        width: "150px",
                        height: "150px",
                        margin: "0px 8px",
                        backgroundColor: secondColor,
                    }}
                ></div>
            </div>
            <div style={{ margin: "24px 0px" }}>
                <button onClick={changeColor1Handle}>
                    Change first sqaure color
                </button>
                <button onClick={changeColor2Handle}>
                    Change second square color
                </button>
            </div>
        </div>
    );
};

export default Boxes;
