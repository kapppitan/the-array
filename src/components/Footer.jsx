export function Footer() {
    return (
        <div className="text-center text-[#ffddbb]">
            <p className="font-[600] text-2xl pb-2">Social Links</p>
            <div className="flex justify-center w-full pb-25 gap-2">
                <a href="https://kapishorrified.itch.io/" target="_blank" className="bg-[#020202] rounded-lg hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] transition-300 p-2">
                    <img src="itchio_logo.png" alt="itchio_logo" className="h-10" />
                </a>
                <a href="https://discord.com/users/668359979589435393" target="_blank" className="bg-[#020202] rounded-lg hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] duration-300 p-2">
                    <img src="discord_logo.png" alt="discord_logo" className="h-10" />
                </a>
                <a href="https://github.com/kapppitan" target="_blank" className="bg-[#020202] rounded-lg hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] duration-300 p-2">
                    <img src="github_logo.png" alt="github_logo" className="h-10" />
                </a>
                <a href="https://www.youtube.com/@kapishorrified" target="_blank" className="bg-[#020202] rounded-lg hover:drop-shadow-[0_0_3px_rgba(255,255,255,0.5)] duration-300 p-2">
                    <img src="youtube_logo.png" alt="youtube_logo" className="h-10" />
                </a>
            </div>
        </div>
    )
}