import colors from "./colors.json";

const ColorsPage = () => {
    return (
        <ol>
            <li>{colors[0]}</li>
            <li>{colors[1]}</li>
            <li>{colors[2]}</li>
            <li>{colors[3]}</li>
            <li>{colors[4]}</li>
            <li>{colors[5]}</li>
        </ol>
    )
}

export default ColorsPage;