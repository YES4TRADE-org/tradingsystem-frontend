export function SelectProduct(props){
return <div className="m-15 px-10 rounded-lg font-mono">
            <label htmlFor="type" className="sr-only">Type of Products</label>
                <h1 className="text-3xl mb-4 font-bold">Type of the Product: </h1>
                <select id="type" onChange={props.onChange} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                    placeholder='Enter your student id' required>
                    <option value="" disabled selected>Select product type</option>
                    <option value="Notes">Notes</option>
                    <option value="Books">Books</option>
                    <option value="Uniform">Uniform</option>
                </select>
        </div>
}

export function SelectMethod(props){
    return  <div className="m-15 px-10 rounded-lg font-mono">
                <label htmlFor="method" className="sr-only">Methods</label>
                <h1 className="text-3xl mb-4 font-bold">Method: </h1>
                <select id="method" onChange={props.onChange} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
                    placeholder='Enter your student id' required>
                    <option value="" disabled selected>Select desire method</option>
                    <option value="Sell">Sell</option>
                    <option value="Trade">Trade</option>
                </select>
            </div>
}

export function SelectCollege(props){
    return  <div className="m-15 px-10 rounded-lg font-mono">
                <label htmlFor="program" className="sr-only">Programs</label>
                <h1 className="text-3xl mb-4 font-bold">Program: </h1>
                <select id="program" onChange={props.onChange} className="outline-none border-0 border-b w-100 border-white-500 rounded-sm bg-gray-600"
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
    }

export function SelectCollege1(props){
    return  <div className="self-start ml-15 mt-5 flex flex-col text-sm">
                <label htmlFor="program" className="sr-only">Programs</label>
                <h1 className="text-sm mb-2">Program: </h1>
                <select id="program" onChange={props.onChange} className="outline-none border-0 border-b w-90 border-white-500 rounded-sm bg-gray-600"
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
    }