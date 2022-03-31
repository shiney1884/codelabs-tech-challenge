import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function PlayButton() {
    return (
        <div className="w-10 h-10 rounded-full bg-sky-200 flex justify-center items-center cursor-pointer">
            <div className="w-8 h-8 bg-sky-300 rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faPlay} className='text-white'/>
            </div>
        </div>
    )
}