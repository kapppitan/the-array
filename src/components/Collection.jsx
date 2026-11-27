import { Cube } from "./Cube";

export function Collection() {
    const items = [
        {
            title: "White Noise",
            description: "Description here",
            image: "white-noise.jpg",
            link: ""
        },
        {
            title: "Another Title",
            description: "Another description",
            image: "white-noise.jpg",
            link: ""
        }
    ];

    return (
        <div className="grid grid-cols-5 font-raleway text-[#ffddbb] lg:px-50 px-10">
            {items.map((item, i) => (
                <Cube key={i} {...item} />
            ))}
        </div>
    );
}