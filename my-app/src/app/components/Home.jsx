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
          <div className="inline-block flex px-12">
                {books.map((book) => 
                (<section className="inline-block flex space-x-10 p-2 m-7" key={book.books_id}>
                    <div>
                        <img className="w-60 h-60 rounded-3xl" src={book.url} alt={book.title}></img>
                          <div className="font-mono m-2">
                            <h1 className="font-bold ">{book.title}</h1>
                            <p>Requirements: {book.requirements}</p>
                            <button className="font-bold mx-auto block border 
                            border-black rounded-lg px-4 py-2 my-2 bg-green-700">Trade</button>
                          </div>
                    </div>
                </section>))}
          </div>  
        </>
    );
}