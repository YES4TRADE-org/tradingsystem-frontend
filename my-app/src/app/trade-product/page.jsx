export default function Trade(){
    return (
        <>
            <main className="grid grid-cols-2 gap-1 m-10">
                <section>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Email: </h1>
                        <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            type='email' placeholder='Enter your email' required></input>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Student ID: </h1>
                        <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your student id' required></input>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Program: </h1>
                        <select className="outline-none border-0 border-b w-100 border-white-500 rounded-sm text-gray-400"
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
                        <h1 className="text-3xl mb-4 font-bold">Type: </h1>
                        <select className="outline-none border-0 border-b w-100 border-white-500 rounded-sm text-gray-400"
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
                        <select className="outline-none border-0 border-b w-100 border-white-500 rounded-sm text-gray-400"
                            placeholder='Enter your student id' required>
                            <option value="" disabled selected>Select product type</option>
                            <option value="Sell">Sell</option>
                            <option value="Trade">Trade</option>
                        </select>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Product name: </h1>
                        <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your student id' required></input>
                    </div>
                    <div className="m-15 px-10 rounded-lg font-mono">
                        <h1 className="text-3xl mb-4 font-bold">Student ID: </h1>
                        <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                            placeholder='Enter your student id' required></input>
                    </div>
                </section>
            </main>
        </>
    );
}