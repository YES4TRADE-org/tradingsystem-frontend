import { useState, useEffect } from "react";

export default async function Books(){
    const [books, setBooks] = useState([]);
    
    useEffect(async () => {
        fetch('http://localhost:8080/yes4trade/getbooks')
        .then(res => {
            if(!res.ok){
                throw new Error('Error in getting the books');
            }
            return res.json();
        })
        .then(json => {
            setBooks(json);
        })
        .catch(err => {
         console.log(err);
        })
    }, [books]);

    console.log(books);
}