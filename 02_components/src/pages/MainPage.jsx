import Content from "./../components/Content";

import { RectButton, CircleButton, GreyButton } from './../components/buttons';
// import * as customButtons from "./../components/buttons";

const MainPage = () => {
    return (
        <>
            <div className="sidebar">
                <span className="side-item">Main page</span>
                <span className="side-item">Colors page</span>
                <span className="side-item">About</span>
            </div>
            <div>
                <div style={{textAlign: "center"}}>
                    <RectButton text="Пряма кнопка" />
                    <CircleButton text="Кругла кнопка" color="yellow" size="2em" />
                    <CircleButton text="Натисни на мене" color="blue" size="1.5em" />
                    <GreyButton text="Сіра кнопка"/>
                </div>
                <Content />
            </div>
        </>
    );
};

export default MainPage;
