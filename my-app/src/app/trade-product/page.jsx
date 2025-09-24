"use client";
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

    const [option, setOption] = useState(<><h1 className="text-3xl mb-4 font-bold">
                                            Desire Trade
                                         </h1>
                                         <input className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                                            placeholder='Enter your trade requirements' required></input></>);
    const handleMethodChange = (e) => {
        setMethod(e.target.value);
        if(e.target.value === "Trade"){
            return setOption(<><h1 className="text-3xl mb-4 font-bold">
                                            Desire Trade
                                         </h1>
                                         <input onChange={(e) => setRequirement(e.target.value)} className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                                            placeholder='Enter your trade requirements' required></input></>);
        } else if(e.target.value === "Sell"){
            return setOption(<><h1 className="text-3xl mb-4 font-bold">
                            Price
                         </h1>
                         <input onChange={(e) => setPrice(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your price rate ₱' required></input></>);
        }
    }

    const handlePost = () => {
        const formData1 = new FormData();
        formData1.append("image", picture); 
        formData1.append("title", productName);
        formData1.append("methods", method);
        formData1.append("email", email);
        formData1.append("studentId", studentId);
        formData1.append("program", program);
        formData1.append("type", type);
        formData1.append("requirement", requirement);

        console.log(formData1);

        const formData2 = new FormData();
            formData2.append("image", picture);
            formData2.append("title", productName);
            formData2.append("methods", method);
            formData2.append("email", email);
            formData2.append("studentId", studentId);
            formData2.append("program", program);
            formData2.append("type", type);
            formData2.append("price", price);

            if(method === 'Trade') {
                fetch('http://localhost:5000/yes4trade/upload-trade', {
                    method: 'POST',
                    body: formData1
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
                fetch('http://localhost:5000/yes4trade/upload-sell', {
                    method: 'POST',
                    body: formData2
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
                        <h1 className="text-3xl mb-4 font-bold">Type of the Product: </h1>
                        <select onChange={(e) => setType(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
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
                        <h1 className="text-3xl mb-4 font-bold">Method: </h1>
                        <select onChange={handleMethodChange} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
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
                        <h1 className="text-3xl mb-4 font-bold">Program: </h1>
                        <select onChange={(e) => setProgram(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
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
