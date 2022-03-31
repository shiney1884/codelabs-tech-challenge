import Navbar from "./Navbar"
import BlueButton from "./BlueButton"

export default function Header() {
    return (
        <div className="flex justify-between h-24 items-center">
            <div className="text-blue-500 font-bold cursor-pointer">Building.RS</div>
            <div className="hidden lg:flex"><Navbar /></div>
            <div className="hidden lg:flex"><BlueButton text='Get Started' /></div>
            <div className="flex flex-col lg:hidden">
                <div className="h-1 w-6 mt-1 bg-blue-500"></div>
                <div className="h-1 w-6 mt-1 bg-blue-500"></div>
                <div className="h-1 w-6 mt-1 bg-blue-500"></div>
            </div>
        </div>
    )
}