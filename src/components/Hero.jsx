export function Hero() {
    return (
        <div className="container-fluid">
            <div className="bg-[#020202] grid">
                <img src="banner1.svg" alt="" className="col-start-1 row-start-1 mx-auto my-10 w-4/5" />
                <img src="banner2.svg" alt="" className="col-start-1 row-start-1 mx-auto my-10 w-4/5 animate-[bob_5s_ease-in-out_infinite]" />
            </div>
            <h1 className="text-8xl text-center">THE ARRAY</h1>
        </div>
    )
}