export function Navbar() {
    return (
        <nav className="group fixed flex font-caveat text-white gap-2 p-5">
            <object data="icon.svg" type="image/svg+xml" className="h-15"></object>
            <p className="text-2xl overflow-hidden">
                <span className="block -translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    Spirit <br /> River's
                </span>
            </p>
        </nav>
    )
}