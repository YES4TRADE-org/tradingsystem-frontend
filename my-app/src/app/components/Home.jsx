"use client";

import { useState, useEffect } from "react";

export default function Books(){
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/yes4trade/getbooks')
        .then(res => {
            if(!res.ok){
                throw new Error('Error! Cannot get books');
            }
            return res.json();
        })
        .then(json => {
            console.log(json);
            setBooks(json);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    console.log(books);

    return (
        <>
          <ul>
            {books.map((book) => (<li key={book.books_id}>{book.title}</li>))}
          </ul>
        </>
    );
}