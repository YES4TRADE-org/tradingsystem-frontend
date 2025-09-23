export default function Trade(){
    return (
        <>
          <section>
            <div className="m-10 px-10 rounded-lg font-mono">
                <h1 className="text-3xl mb-4 font-bold">Email: </h1>
                <input className="border-b w-100 border-white-500 rounded-sm" type='email' placeholder='Enter your email'></input>
            </div>
            <div className="m-10 px-10 rounded-lg font-mono">
                <h1 className="text-3xl mb-4 font-bold">Email: </h1>
                <input className="border-0 border-b w-100 border-white-500 rounded-sm" type='email' placeholder='Enter your email'></input>
            </div>
          </section>
        </>
    );
}