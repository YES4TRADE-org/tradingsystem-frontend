"use client";
import { useState, useEffect } from "react";
import Input from "../../(components)/Input.jsx";
import Link from "next/link";
import Button from "../../(components)/Button.jsx";
import { SelectProduct, SelectMethod, SelectCollege } from "../../(components)/Select.jsx";

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
    const [option, setOption] = useState('Trade');

    const handleMethodChange = (e) => {
        setMethod(e.target.value);
        if(e.target.value === 'Trade'){
            setOption('Trade');
        } else {
            setOption('Sell')
        }
    }

    const changingOption = () => {
        if(option === "Trade"){
            return <><h1 className="text-3xl mb-4 font-bold">
                        Desire Trade
                    </h1>
                    <input onChange={(e) => setRequirement(e.target.value)} className=" outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your trade requirements' required></input></>;
        } else {
            return <><h1 className="text-3xl mb-4 font-bold">
                        Price
                    </h1>
                    <input onChange={(e) => setPrice(e.target.value)} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your price rate ₱' required></input></>;
        }
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

            console.log(method);

            if(method === 'Trade') {
                console.log(picture);
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
                    console.log("Fetched: ", json);
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
                    console.log(res.status);
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
                    <Input type="email" titleClassName="text-3xl mb-4 font-bold" inputClassName="outline-none border-0 border-b w-100 border-white-500 rounded-sm" onChange={(e) => setEmail(e.target.value)} label="Email: " placeholder="Enter your email" />
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                    <Input type="text" titleClassName="text-3xl mb-4 font-bold" inputClassName="outline-none border-0 border-b w-100 border-white-500 rounded-sm" onChange={(e) => setStudentId(e.target.value)} label="Student ID: " placeholder="Enter your Student ID"/>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                    <Input type="text" titleClassName="text-3xl mb-4 font-bold" inputClassName="outline-none border-0 border-b w-100 border-white-500 rounded-sm" onChange={(e) => setProductName(e.target.value)} label="Product Name" placeholder="Enter the product name" />
                    </div>
                    <SelectProduct onChange={(e) => setType(e.target.value)}/>
                </section>
                <section>
                    <SelectMethod onChange={handleMethodChange}/>
                    <div className="m-15 px-10 rounded-lg font-mono">
                     {changingOption()}
                    </div>
                    <SelectCollege onChange={(e) => setProgram(e.target.value)} />
                    <div className="m-15 px-10 rounded-lg font-mono">
                    <Input type="file" label="Upload Picture: " onChange={(e) => setPicture(e.target.files[0])} titleClassName="text-3xl mb-4 font-bold" inputClassName="file:mr-4 bg-gray-600
                        cursor-pointer file:hidden outline-none border-0 border-b w-100 border-white-500 rounded-sm" />
                    </div>
                </section>
            </main>
                <div>
                    <Link href="/">
                    <Button onClick={handlePost} className="font-mono absolute right-150 top-185 
                    cursor-pointer font-bold mx-auto block border rounded-lg px-7 py-2 text-3xl" type="submit"
                    label="Post"/>
                    </Link>
                </div>
        </>
    );
}

