import mailchimp from '../images/mailchimp-logo.png'
import namura from '../images/NAMURA_LOGO.png'
import okotoc from '../images/okotoc-logo.jpg'
import splunk from '../images/splunk-logo.png'
import yamaha from '../images/YamahaCorp.png'

export default function Supporters() {
    return (
        <div className='mt-36 flex flex-col lg:flex-row'>
            <img className='m-auto mt-8 w-48 lg:w-36 lg:mt-0' src={yamaha} alt="Yamaha Logo" />
            <img className='m-auto mt-8 w-48 lg:w-36 lg:mt-0' src={namura} alt="Yamaha Logo" />
            <img className='m-auto mt-8 w-48 lg:w-36 lg:mt-0' src={mailchimp} alt="Yamaha Logo" />
            <img className='m-auto mt-8 w-48 lg:w-36 lg:mt-0' src={splunk} alt="Yamaha Logo" />
            <img className='m-auto mt-8 w-48 lg:w-36 lg:mt-0' src={okotoc} alt="Yamaha Logo" />
        </div>
    )
}