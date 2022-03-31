import search from '../images/search.png'
import star from '../images/star.png'
import secure from '../images/secure.png'
import family from '../images/family.png'

export default function StepCards(props) {
    return (
        <div className="flex overflow-hidden lg:overflow-visible lg:justify-between mt-10">
            <div className="w-full flex-shrink-0 lg:w-64 h-64 flex flex-col justify-between p-4 shadow-2xl">
                <div className="flex items-center h-12">
                    <div className='bg-blue-400 w-16 mr-4 rounded h-full flex justify-center items-center'>
                        <img className="w-6" src={search} alt="" />
                    </div>
                    <h2 className="font-semibold text-blue-900">Search Your Demanding House</h2>
                </div>
                <p className="text-gray-400">The better impression it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
                <p className="text-gray-400 cursor-pointer">Read more...</p>
            </div>
            <div className="w-full flex-shrink-0 lg:w-64 h-64 flex flex-col justify-between p-4 shadow-2xl">
                <div className="flex h-12">
                    <div className='bg-white w-16 mr-4 rounded h-full flex justify-center items-center'>
                        <img className="w-6" src={star} alt="" />
                    </div>
                    <h2 className="font-semibold text-blue-900">Our Best Home Features</h2>
                </div>
                <p className="text-gray-400">The better impression it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
                <p className="text-gray-400 cursor-pointer">Read more...</p>
            </div>
            <div className="w-full flex-shrink-0 lg:w-64 h-64 flex flex-col justify-between p-4 shadow-2xl">
                <div className="flex h-12">
                    <div className='bg-orange-400 w-16 mr-4 rounded h-full flex justify-center items-center'>
                        <img className="w-6" src={secure} alt="" />
                    </div>
                    <h2 className="font-semibold text-blue-900">Book Your Dream House Property</h2>
                </div>
                <p className="text-gray-400">The better impression it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
                <p className="text-gray-400 cursor-pointer">Read more...</p>
            </div>
            <div className="w-full flex-shrink-0 lg:w-64 h-64 flex flex-col justify-between p-4 shadow-2xl">
                <div className="flex h-12">
                    <div className='bg-purple-400 w-16 mr-4 rounded h-full flex justify-center items-center'>
                        <img className="w-6" src={family} alt="" />
                    </div>
                    <h2 className="font-semibold text-blue-900">Enjoy Your New Place With Family</h2>
                </div>
                <p className="text-gray-400">The better impression it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
                <p className="text-gray-400 cursor-pointer">Read more...</p>
            </div>
        </div>
    )
}