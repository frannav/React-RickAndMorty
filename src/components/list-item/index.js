import React from 'react';

export default function characterListItem({ name }) {
    return (
        <>
            <article className="list-item">{name}</article>
        </>
    );
}