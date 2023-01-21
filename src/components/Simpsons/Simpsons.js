import React from 'react';
import {Simpson} from "../Simpson/Simpson";

const Simpsons = () => {
    const simpsons = [
        { id:1,
            name: "Bart",
            surname: "Simpson",
            image: "https://upload.wikimedia.org/wikipedia/ru/2/29/Bart_Simpson.gif"
        },
        {
            id:2,
            name: "Homer",
            surname: "Simpson",
            image: "https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"
        },
        {
            id:3,
            name: "Marge",
            surname: "Simpson",
            image: "https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png"
        },
        {
            id:4,
            name: "Lisa",
            surname: "Simpson",
            image: "https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png"
        },
        {
            id:5,
            name: "Abraham",
            surname: "Simpson",
            image: "https://cdn.100sp.ru/pictures/143445315"
        }
    ]
    return (
        <div>
            {simpsons.map(simpson=><Simpson key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

export {Simpsons};