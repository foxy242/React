import React from "react";

const App = () => {
    const name = "Георгій";
    const welcomeText = "Ласкаво просимо до нашого сайту!";
    const imageUrl = "https://via.placeholder.com/150";
    const imageAlt = "Приклад зображення";
    
    const favoriteSite = {
        name: "Google",
        url: "https://www.google.com/"
    };
    
    const num1 = 10;
    const num2 = 20;
    const sum = num1 + num2;
    
    const colors = ["Червоний", "Синій", "Чорний"];

    return (
        <div>
            <h1>{name}</h1>
            <p>{welcomeText}</p>
            <img src={imageUrl} alt={imageAlt} />
            <p>
                Улюблений сайт: <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">{favoriteSite.name}</a>
            </p>
            <p>Сума чисел {num1} + {num2} = {sum}</p>
            <ul>
                {colors.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
