import BlueButton from "./BlueButton";

export default function SearchBar() {
    return (
        <div className="mt-10">
            <div className="lg:w-1/5 bg-sky-100 py-2 px-4 rounded-t">
                <ul className="flex justify-evenly">
                    <li className="text-blue-500 cursor-pointer">Rent</li>
                    <li className="text-gray-400 cursor-pointer">Buy</li>
                    <li className="text-gray-400 cursor-pointer">Sell</li>
                </ul>
            </div>
            <form className="flex flex-col lg:flex-row bg-white items-center justify-between lg:w-11/12 p-6 mt shadow-2xl">
                <div className="lg:border-r-2 lg:border-r-solid lg:border-r-grey-400 py-4 px-12 flex flex-col justify-evenly">
                    <p className="text-center text-gray-400 lg:text-left">Location</p>
                    <p className="font-semibold">Zindabazar, Sylhet</p>
                </div>
                <div className="lg:border-r-2 lg:border-r-solid lg:border-r-grey-400 py-4 px-12">
                    <p className="text-center text-gray-400 lg:text-left">Home Type</p>
                    <p className="font-semibold">Duplex House, 2400m</p>
                </div>
                <div className="py-4 px-12">
                    <p className="text-center text-gray-400 lg:text-left">Price Range</p>
                    <p className="font-semibold">$10,000 - $60,000</p>
                </div>
                <BlueButton text='Search Property' />
            </form>
        </div>
    )
}