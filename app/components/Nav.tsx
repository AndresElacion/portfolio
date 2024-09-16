import { Link, useLocation } from "@remix-run/react";

export default function Nav() {
    const location = useLocation();

    return (
        <div className="sticky top-0 z-40">
            <nav className="w-full flex justify-start p-4">
                <ul className="uppercase flex flex-row space-x-2 text-gray-700">
                    <Link to="#hero">
                        <li className={`px-3 py-1 text-sm bg-gray-300/80 hover:bg-gray-400/80 backdrop-blur-lg ${location.hash === '#hero' ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>home</li>
                    </Link>
                    <Link to="#skills">
                        <li className={`px-3 py-1 text-sm bg-gray-300/80 hover:bg-gray-400/80 backdrop-blur-lg ${location.hash === '#skills' ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>skills</li>
                    </Link>
                    <Link to="#featured">
                        <li className={`px-3 py-1 text-sm bg-gray-300/80 hover:bg-gray-400/80 backdrop-blur-lg ${location.hash === '#featured' ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>featured</li>
                    </Link>
                    <Link to="#projects">
                        <li className={`px-3 py-1 text-sm bg-gray-300/80 hover:bg-gray-400/80 backdrop-blur-lg ${location.hash === '#projects' ? 'bg-cyan-500 text-white' : 'bg-gray-200'}`}>projects</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}
