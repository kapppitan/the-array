export function Hero() {
    return (
        <div className="container-fluid text-[#ffddbb] pb-25">
            <div className="bg-[#020202] grid pb-25">
                <img src="banner1.svg" alt="" className="col-start-1 row-start-1 mx-auto my-10 w-4/5" />
                <img src="banner2.svg" alt="" className="col-start-1 row-start-1 mx-auto my-10 w-4/5 animate-[bob_5s_ease-in-out_infinite]" />
            </div>
            <p className="font-raleway text-8xl text-center pb-2">THE ARRAY</p>
            <p className="font-raleway text-center pb-25">A repository of worlds.</p>
            <p className="text-2xl text-center">- - -</p>
        </div>
    )
}