import React from 'react';

const Simpson = ({simpson}) => {
    const{id, name, surname, image}=simpson
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>surname:{surname}</div>
            <img src={image} alt={name}/>

        </div>
    );
};

export {Simpson};