"use client";

import { useState, useEffect } from "react";

export default function Books(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/yes4trade/getbooks")
        .then((res) => {
            if (!res.ok) {
            throw new Error("Error! Cannot get books");
            }
            return res.json();
        })
        .then((json) => {
            console.log("Fetched:", json);
            setBooks(json);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <>
          <div className="inline-block flex space-x-10 p-10">
                {books.map((book) => 
                (<section className="inline-block flex space-x-10 p-15 m-10
                                border" key={book.books_id}>
                    <div>
                        <img className="w-15 h-15" src={book.url} alt={book.title}></img>
                        <h1>{book.title}</h1>
                    </div>
                </section>))}
          </div>  
        </>
    );
}