"use client";
import { headers } from "next/headers";
import { useState, useEffect } from "react";

export default function Trade(){
    const [email, setEmail] = useState("");
    const [studentId, setStudentId] = useState("");
    const [program, setProgram] = useState("");
    const [type, setType] = useState("");
    const [method, setMethod] = useState("");
    const [productName, setProductName] = useState("");
    const [requirement, setRequirement] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState(null);

    const handlePost = async () => {
        //define a body once, then append common values
        const requestBody = new FormData();
        requestBody.append("image", picture); 
        requestBody.append("title", productName);
        requestBody.append("methods", method);
        requestBody.append("email", email);
        requestBody.append("studentId", studentId);
        requestBody.append("program", program);
        requestBody.append("type", type);
        
        console.log(requestBody);
        console.log(`${process.env.NEXT_PUBLIC_API_URL}`);
        
        
        try {
            if(method === 'Trade') {
                // append requirement if trade method is selected
                requestBody.append("requirement", requirement);
                
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/yes4trade/upload-trade`, {
                        method: "POST",
                        body: requestBody
                    }
                );
                
                if (!response.ok) throw new Error('Error! Cannot fetch due to errors');
                
                const json = await response.json();
                
                console.log(json);
                
            } else {
                // append price if not using trade method
                requestBody.append("price", price);

                const response = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/yes4trade/upload-sell`, {
                    method: "POST",
                    body: requestBody
                });

                if (!response.ok) throw new Error('Error! Cannot fetch due to errors');

                const json = await response.json();
                
                console.log(json);
            }

        } catch (e) {
            console.error(e);
        }
    }
    
    return (
        <>
            <main className="grid grid-cols-2 gap-1 m-10">
                <section>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Email: </h1>
                        <input onChange={(e) => setEmail(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            type='email' placeholder='Enter your email' required></input>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Student ID: </h1>
                        <input onChange={(e) => setStudentId(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your student id' required></input>
                    </div>
                                        <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Product Name: </h1>
                        <input onChange={(e) => setProductName(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your product name' required></input>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <label htmlFor="type" className="sr-only">Type of Products</label>
                        <h1 className="text-3xl mb-4 font-bold">Type of the Product: </h1>
                        <select id="type" onChange={(e) => setType(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                            placeholder='Enter your student id' required>
                            <option value="" disabled selected>Select product type</option>
                            <option value="Notes">Notes</option>
                            <option value="Books">Books</option>
                            <option value="Uniform">Uniform</option>
                        </select>
                    </div>
                </section>
                <section>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <label htmlFor="method" className="sr-only">Methods</label>
                        <h1 className="text-3xl mb-4 font-bold">Method: </h1>
                        <select id="method" onChange={e => setMethod(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                            placeholder='Enter your student id' required>
                            <option value="" disabled selected>Select desire method</option>
                            <option value="Sell">Sell</option>
                            <option value="Trade">Trade</option>
                        </select>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <OptionForm
                            method={method}
                            setPrice={setPrice}
                            setRequirement={setRequirement}
                        />
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <label htmlFor="program" className="sr-only">Programs</label>
                        <h1 className="text-3xl mb-4 font-bold">Program: </h1>
                        <select id="program" onChange={(e) => setProgram(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                            placeholder='Enter your student id' required>
                            <option value="" disabled selected>Select your program</option>
                            <option value="CEN">Engineering</option>
                            <option value="CAS">Arts and Sciences</option>
                            <option value="CAG">Agriculture</option>
                            <option value="CIT">Industrial Technology</option>
                            <option value="CTE">Teacher Education</option>
                            <option value="CABHA">Administration, Business, Hospitality and Accountancy</option>
                            <option value="CAM">Allied Medicine</option>
                        </select>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Upload Picture: </h1>
                        <input onChange={(e) => setPicture(e.target.files[0])} type="file" className="file:mr-4 bg-gray-600
                        cursor-pointer file:hidden outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                         required></input>
                    </div>
                </section>
            </main>
                <div>
                    <button onClick={handlePost} type="submit" className="font-mono absolute right-150 top-185 
                    cursor-pointer font-bold mx-auto block border rounded-lg px-7 py-2 text-3xl">Post</button>
                </div>
        </>
    );
}

function OptionForm({method, setRequirement, setPrice}){
    switch (method) {
        case "Trade":
            return (
                <>
                <h1 className="text-3xl mb-4 font-bold">
                    Desire Trade
                </h1>
                <input
                    onChange={(e) => setRequirement(e.target.value)}
                    className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your trade requirements' required
                />
                </>
            );
        
        case "Sell":
            return (
                <>
                <h1 className="text-3xl mb-4 font-bold">
                    Price
                </h1>
                <input
                    onChange={(e) => setPrice(e.target.value)}
                    className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your price rate ₱' required
                />
                </>

            );

        default:
            return (
                <>
                <h1 className="text-3xl mb-4 font-bold">
                    Desire Trade
                </h1>
                <input
                    className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your trade requirements' required />
                </>
            );
    }
}