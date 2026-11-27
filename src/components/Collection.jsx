import { Cube } from "./Cube";

export function Collection() {
    const releases = [
        {
            title: "Coming Soon",
            description: "---",
            image: "white-noise.jpg",
            link: ""
        },
    ];

    const concepts = [
        {
            title: "Minesweeping",
            description: "A game about minesweeping.",
            image: "https://img.itch.zone/aW1nLzMxOTgxNTQ3LmpwZw==/315x250%23c/LfZ%2BTa.jpg",
            link: "https://kapishorrified.itch.io/minesweeping"
        },
        {
            title: "Forest 1966",
            description: "Save the missing campers.",
            image: "https://img.itch.zone/aW1nLzMwODMzMjk5LmpwZw==/original/7OXB%2Fg.jpg",
            link: ""
        },
    ];

    return (
        <div className="text-[#ffddbb] pb-25">
            <div className="grid grid-cols-5 font-raleway lg:px-50 px-10 pb-25">
                {releases.map((item, i) => (
                    <Cube key={i} {...item} />
                ))}
            </div>

            <div className="lg:px-50 px-10 pb-15">
                <p className="font-[600] text-2xl">Concepts</p>
                <p>These are ideas that are still concepts and is yet to be developed into a game or into a polished version.</p>
            </div>
            
            <div className="grid grid-cols-5 font-raleway lg:px-50 px-10 pb-25">
                {concepts.map((item, i) => (
                    <Cube key={i} {...item} />
                ))}
            </div>
            <p className="text-2xl text-center">- - -</p>
        </div>
    );
}