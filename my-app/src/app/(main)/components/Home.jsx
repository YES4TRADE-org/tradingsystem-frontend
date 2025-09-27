"use client";

import { useState, useEffect } from "react";

export default function Books(){
    const [items, setItems] = useState([]);

    const methods = (method, type1, type2) => {
        if(method === 2) return <p>Price: ₱{type2}</p>;
        return <p>Requirements: {type1}</p>
    }

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/yes4trade/getbooks`)
        .then((res) => {
            if (!res.ok) {
            throw new Error("Error! Cannot get books");
            }
            return res.json();
        })
        .then((json) => {
            console.log("Fetched:", json);
            setItems(json);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

     return (
        <>
          <div className="inline-block flex px-12">
                {items.map((item) => 
                (<section className="inline-block flex space-x-10 p-2 m-6" key={item.product_id}>
                    <div>
                        <img className="w-60 h-60 rounded-3xl" src={item.url} alt={item.title}></img>
                          <div className="font-mono m-2">
                            <h1 className="font-bold ">{item.title}</h1>
                            {methods(item.methods, item.requirements, item.price)}
                            <button className="font-bold mx-auto block border 
                            border-black rounded-lg px-4 py-2 my-2 bg-green-700 cursor-pointer">Trade</button>
                          </div>
                    </div>
                </section>))}
          </div>  
        </>
    );
}