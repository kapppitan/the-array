import { useState } from "react";

export function Cube({ title, description, image, link }) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    function handleMouseMotion(e) {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        setRotation({
            x: (0.5 - y) * 40,
            y: (x - 0.5) * 40
        });
    }

    return (
        <a
            href={link}
            onMouseEnter={() => setHovered(true)}
            onMouseMove={handleMouseMotion}
            onMouseLeave={() => { setHovered(false); setRotation({ x: 0, y: 0 }); }}
            className={`relative block w-50 ${hovered ? "z-50 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" : "z-0"} transition-all duration-300`}
            style={{ perspective: "800px" }}>
            <div 
                className="relative transition-transform duration-300 ease-out"
                style={{ transformStyle: "preserve-3d", transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${hovered ? 1.5 : 1})` }}>
                <div className="relative h-50 bg-[#020202]" style={{ transform: "translateZ(50px)" }}>
                    <img src={image} alt="thumbnail" className="block w-full h-full object-cover p-2" />
                    <div className="absolute bottom-0 p-2 w-full text-[#ffddbb] bg-[#020202]">
                        <p className="text-lg">{title}</p>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="absolute bg-[#5c5c5c]" style={{ left: "-50px", top: 0, bottom: 0, width: "100px", transform: "rotateY(-90deg)", backfaceVisibility: "hidden" }}></div>
                <div className="absolute bg-[#5c5c5c]" style={{ right: "-50px", top: 0, bottom: 0, width: "100px", transform: "rotateY(90deg)", backfaceVisibility: "hidden" }}></div>
                <div className="absolute bg-[#585858]" style={{ top: "-50px", left: 0, right: 0, height: "100px", transform: "rotateX(90deg)", backfaceVisibility: "hidden" }}></div>
                <div className="absolute bg-[#323232]" style={{ bottom: "-50px", left: 0, right: 0, height: "100px", transform: "rotateX(-90deg)", backfaceVisibility: "hidden" }}></div>
            </div>
        </a>
    )
}