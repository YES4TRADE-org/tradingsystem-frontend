"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

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

    const [option, setOption] = useState(<><h1 className="text-3xl mb-4 font-bold">
                                            Desire Trade
                                         </h1>
                                         <input onChange={(e) => setRequirement(e.target.value)} className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                                            placeholder='Enter your trade requirements' required></input></>);
    const handleMethodChange = (e) => {
        setMethod(e.target.value);
        methods(e.target.value, setOption, setPrice, setRequirement);
    }

    const handlePost = () => {
        const formData = new FormData();
            formData.append("image", picture); 
            formData.append("title", productName);
            formData.append("methods", method);
            formData.append("email", email);
            formData.append("studentId", studentId);
            formData.append("program", program);
            formData.append("type", type);


            if(method === 'Trade') {
                
                formData.append("requirement", requirement);

                fetch(`${process.env.NEXT_PUBLIC_API_URL}/yes4trade/upload-trade`, {
                    method: 'POST',
                    body: formData
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error('Error! Cannot fetch due to errors')
                    }
                    return res.json();
                })
                .then(json => {
                    console.log('Fetched: ', json);
                })
                .catch(err => {
                    console.error(err);
                });
          } else {
                
                formData.append("price", price);

                fetch(`${process.env.NEXT_PUBLIC_API_URL}/yes4trade/upload-sell`, {
                    method: 'POST',
                    body: formData
                })
                .then(res => {
                    if(!res.ok){
                        throw new Error('Error! Cannot fetch due to errors')
                    }
                    return res.json();
                })
                .then(json => {
                    console.log('Fetched: ', json);
                })
                .catch(err => {
                    console.error(err);
                });
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
                        <select id="method" onChange={handleMethodChange} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                            placeholder='Enter your student id' required>
                            <option value="" disabled selected>Select desire method</option>
                            <option value="Sell">Sell</option>
                            <option value="Trade">Trade</option>
                        </select>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                                {option}
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
                    <Link href="/" onClick={handlePost}>
                    <button type="submit" className="font-mono absolute right-150 top-185 
                    cursor-pointer font-bold mx-auto block border rounded-lg px-7 py-2 text-3xl">Post</button>
                    </Link>
                </div>
        </>
    );
}


function methods(value, setOption, setPrice, setRequirement){
    if(value === "Trade"){
        return setOption(<><h1 className="text-3xl mb-4 font-bold">
                                        Desire Trade
                                        </h1>
                                        <input onChange={(e) => setRequirement(e.target.value)} className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                                        placeholder='Enter your trade requirements' required></input></>);
    } else if(value === "Sell"){
        return setOption(<><h1 className="text-3xl mb-4 font-bold">
                        Price
                        </h1>
                        <input onChange={(e) => setPrice(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                        placeholder='Enter your price rate ₱' required></input></>);
    }
}
