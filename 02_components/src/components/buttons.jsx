import "./buttons.css";

export const CircleButton = ({text, color, size}) => {
    return (
        <button className="circle">
            {text}
        </button>
    )
}

export const RectButton = ({text}) => {
    return (
        <button>{text}</button>
    )
}

export const GreyButton = ({text}) => {
    return (
        <button className="grey">{text}</button>
    )
}