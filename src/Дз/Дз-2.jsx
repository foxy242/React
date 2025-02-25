import React from "react";
import ReactDOM from "react-dom";

const Greeting = ({ name }) => {
    return <h1>Привіт, {name}!</h1>;
};

const Message = ({ text }) => {
    return <p>{text}</p>;
};

const Button = ({ onClick }) => {
    return <button onClick={onClick}>Натисни мене</button>;
};

const App = () => {
    const handleClick = () => {
        console.log("Кнопку натиснуто!");
    };

    return (
        <div>
            <Greeting name="Георгій" />
            <Message text="Ласкаво просимо до нашого додатку!" />
            <Button onClick={handleClick} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
