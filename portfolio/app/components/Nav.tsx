import { Link } from "@remix-run/react";

export default function Nav() {
    return (
        <div className="sticky top-0 z-40">
            <nav className="w-full flex justify-start p-4">
                <ul className="uppercase flex flex-row space-x-2 text-gray-700">
                    <Link to="#hero"><li className="bg-gray-200 px-3 py-1 text-sm bg-gray-300/80 backdrop-blur-lg">home</li></Link>
                    <Link to="#featured"><li className="bg-gray-200 px-3 py-1 text-sm bg-gray-300/80 backdrop-blur-lg">featured</li></Link>
                    <Link to="#projects"><li className="bg-gray-200 px-3 py-1 text-sm bg-gray-300/80 backdrop-blur-lg">projects</li></Link>
                </ul>
            </nav>
        </div>
    )
}