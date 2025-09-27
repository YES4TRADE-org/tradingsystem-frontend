import { IoLogInOutline } from "react-icons/io5";
import { RiAccountCircle2Line } from "react-icons/ri";

export default function Login(){

    const error = () => {
        
    }

    return <>
        <section className="border border-gray-600 shadow-[5px_5px_10px_white] rounded-lg bg-gray-600 w-250 h-150 grid grid-cols-2 gap-1 font-mono">
            <div className="flex flex-col justify-center content-center items-center">
                <div className="flex flex-row justify-center items-center gap-1 mb-5">
                    <IoLogInOutline />
                    <h1 className="text-sm font-bold mr-5">Login</h1>
                    <RiAccountCircle2Line className="ml-5"/>
                    <h1 className="text-sm font-bold">Sign Up</h1>
                </div>
                <h1 className="text-3xl">Welcome!</h1>
                <p className="text-sm">Please enter your details to login</p>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <label >Enter your email: </label>
                    <input className="border  rounded-lg py-1 px-2 w-90 text-xs mt-2" type="email" placeholder="Enter your SLSU email"></input>
                    <error />
                </div>
                <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                    <label >Enter your password: </label>
                    <input className="border  rounded-lg py-1 px-2 w-90 text-xs mt-2" type="email" placeholder="Enter your password"></input>
                    <error />
                </div>
                <div className="self-start ml-15 mt-7 flex flex-col text-sm">
                    <button className="border bg-gray-800 border-gray-800 shadow-[3px_3px_7px_white] rounded-lg p-2 w-90">Login</button>
                </div>
                <p className="text-sm mt-10">Forgot password? </p>
            </div>
            <img className="w-full h-full rounded-lg brightness-75" src='https://res.cloudinary.com/dkacxbbwh/image/upload/v1758947795/slsu_lpnqvl.jpg'></img>
        </section>
    </>
}