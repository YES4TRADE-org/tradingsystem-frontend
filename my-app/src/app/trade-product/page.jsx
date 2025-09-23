export default function Trade(){
    return (
        <>
          <section>
            <div className="m-10 px-10 rounded-lg font-mono">
                <h1 className="text-3xl mb-4 font-bold">Email: </h1>
                <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    type='email' placeholder='Enter your email' required></input>
            </div>
            <div className="m-10 px-10 rounded-lg font-mono">
                <h1 className="text-3xl mb-4 font-bold">Student ID: </h1>
                <input className="outline-none border-0 border-b w-100 border-white-500 rounded-sm"
                    placeholder='Enter your student id' required></input>
            </div>
          </section>
        </>
    );
}