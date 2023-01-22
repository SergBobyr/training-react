import React from 'react';
import {Character} from "../Character/Character";

const Characters = () => {
    const characters = [

        {id:156,
            name:"Hemorrhage",
            status:"Alive",
            species:"Human",
            gender:"Male",
            image: 'https://rickandmortyapi.com/api/character/avatar/156.jpeg'},
        {id:353,
            name:"Tiny Rick",
            status:"Dead",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/353.jpeg",
            },
        {id:194,
            name:"Kozbian",
            status:"Alive",
            species:"Alien",
            gender:"unknown",
            image:"https://rickandmortyapi.com/api/character/avatar/194.jpeg"},
        {id:525,
            name:"Glootie",
            status:"Alive",
            species:"Alien",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/525.jpeg"},
        {id:236,
            name:"Mr. Beauregard",
            status:"Dead",
            species:"Alien",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/236.jpeg",

        },
        {id:771,
            name:"Ricardo Montoya",
            status:"unknown",
            species:"Human",
            gender:"Male",
            image:"https://rickandmortyapi.com/api/character/avatar/771.jpeg",}

    ]
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};