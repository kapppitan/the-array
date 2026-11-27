import { Cube } from "./Cube";

export function Collection() {
    const items = [
        {
            title: "Minesweeping",
            description: "A game about minesweeping.",
            image: "https://img.itch.zone/aW1nLzMxOTgxNTQ3LmpwZw==/315x250%23c/LfZ%2BTa.jpg",
            link: "https://kapishorrified.itch.io/minesweeping"
        },
        {
            title: "Coming Soon",
            description: "---",
            image: "white-noise.jpg",
            link: ""
        }
    ];

    return (
        <div className="text-[#ffddbb] pb-25">
            <div className="grid grid-cols-5 font-raleway lg:px-50 px-10 pb-25">
                {items.map((item, i) => (
                    <Cube key={i} {...item} />
                ))}
            </div>
            <p className="text-2xl text-center">- - -</p>
        </div>
    );
}