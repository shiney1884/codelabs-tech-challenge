export default function Navbar() {
    return (
        <div>
            <ul className="flex">
                <li className="mx-6 text-black font-bold underline decoration-blue-500 underline-offset-8 cursor-pointer">Home</li>
                <li className="mx-6 text-neutral-900 cursor-pointer">About Us</li>
                <li className="mx-6 text-neutral-900 cursor-pointer">Properties</li>
                <li className="mx-6 text-neutral-900 cursor-pointer">Agents</li>
                <li className="mx-6 text-neutral-900 cursor-pointer">Contact</li>
            </ul>
        </div>
    )
}