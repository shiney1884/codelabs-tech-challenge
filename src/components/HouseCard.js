import house from '../images/house-1.jpg'
import heart from '../images/heart.png'
import share from '../images/share.png'
import bed from '../images/bed.png'
import bath from '../images/bath.png'
import sqft from '../images/square-feet.png'

export default function HouseCard(props) {
    return (
        <div className='w-full border flex flex-col flex-shrink-0 border-gray-200 rounded p-3 z-100 lg:w-80'>
            <div className='relative'>
                <img className='rounded w-full lg:w-72 h-56 bg-cover bg-center' src={house} alt="" />
                <div className='h-6 w-28 absolute top-4 left-4 text-xs flex justify-center items-center bg-white text-blue-500 rounded-xl'>Available Now</div>
            </div>
            <div className='flex justify-between mt-4'>
                <p className='font-bold text-blue-500'>$256,000</p>
                <div className='flex'>
                    <div className='bg-gray-100 w-6 mx-2 flex justify-center items-center rounded-full h-6 cursor-pointer'>
                        <img className='w-3' src={heart} alt="" />
                    </div>
                    <div className='bg-gray-100 w-6 mx-2 flex justify-center items-center rounded-full h-6 cursor-pointer'>
                        <img className='w-3' src={share} alt="" />
                    </div>
                </div>
            </div>
            <p className='font-semibold mt-4'>The better impression it would make. An agency</p>
            <p className='text-gray-400 text-sm mt-2'>Amborkhana 3100, Sylhet, Bangladesh</p>
            <div className='flex justify-between mt-4 w-4/5'>
                <div className='text-xs flex text-gray-400'>
                    <img className='w-4 mr-2' src={bed} alt="" />
                    3 Bd
                </div>
                <div className='text-xs flex text-gray-400'>
                    <img className='w-4 mr-2' src={bath} alt="" />
                    2 Bth
                </div>
                <div className='text-xs flex text-gray-400'>
                    <img className='w-4 mr-2' src={sqft} alt="" />
                    1200 Sqft
                </div>
            </div>
        </div>
    )
}