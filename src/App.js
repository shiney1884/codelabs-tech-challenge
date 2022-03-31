import Header from "./components/Header";
import landingImg from './images/landing-page-house.jpg'
import BlueButton from "./components/BlueButton";
import WhiteButton from "./components/WhiteButton";
import PlayButton from "./components/PlayButton";
import SearchBar from "./components/SearchBar";
import Supporters from "./components/Supporters";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import HouseCard from "./components/HouseCard";
import StepCards from "./components/StepCards";
import CarouselIndicators from "./components/CarouselIndicators";

function App() {
  return (
    <div className="px-4 lg:px-16 2xl:px-64">
      <Header />
      <img className="-z-10 object-cover object-top w-screen lg:absolute lg:top-0 lg:bottom-0 lg:right-0 lg:w-1/2 lg:h-[750px]" src={landingImg} alt="a cool house" />
      <div>
        <h1 className="text-center lg:text-left text-6xl font-bold mt-4 leading-normal">Easy To Find Your Next<br></br> Perfect Place</h1>
        <p className="text-center text-xl my-5 text-gray-400 lg:text-left lg:w-2/5">An agency, in broad terms, is any relationship between two parties in which one, the agent, represents the other, the principal, in day-to-day transactions.</p>
        <div className="flex justify-evenly lg:justify-between lg:w-1/5">
          <BlueButton text='Learn More' />
          <PlayButton />
        </div>
      </div>
      <SearchBar />
      <Supporters />
      <div className="flex flex-col justify-between mt-36 lg:flex-row">
        <div className="absolute left-0 w-3/4 h-96 bg-sky-100 rounded-r-3xl lg:w-1/4"></div>
        <img className="lg:w-2/5 h-96 z-10 object-cover object-top rounded-r-3xl mt-8" src={landingImg} alt="a cool house" />
        <div className="lg:w-1/2 flex flex-col justify-between">
          <p className="text-center text-lg text-blue-500 font-semibold mt-10 lg:mt-0 lg:text-left lg:text-md">About us</p>
          <h1 className="text-center font-bold text-3xl lg:text-4xl lg:text-left">We Are Providing The Top<br></br> <span className="text-blue-500">Real Estate</span> Property</h1>
          <p className="text-gray-400 mt-10 lg:mt-0">It's very likely that most people visiting a real estate about us page are qualified leads. So it helps to think of this page as your virtual business card. The better it answers the questions people have.
            <br></br><br></br>The better impression  it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
          <div className="flex justify-evenly mt-10 lg:mt-0 lg:w-3/5 lg:justify-between">
            <BlueButton text='Learn More' />
            <WhiteButton text='Contact Us' />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h1 className="text-center font-bold text-3xl lg:text-left lg:text-4xl">Our Most Popular Trading<br></br><span className="text-blue-500">Properties</span></h1>
        <div className="flex flex-col lg:flex-row justify-between mt-10">
          <p className="lg:w-1/2 text-gray-400">The better impression it would make. An agency, in broad terms, is any relationship between two parties in which.</p>
          <div className="m-auto mt-10 flex justify-between w-20 lg:mt-0 lg:m-0">
            <div className="flex justify-center items-center bg-blue-500 w-8 h-8 rounded opacity-30 cursor-pointer">
              <FontAwesomeIcon className="text-white" icon={faAngleLeft} />
            </div>
            <div className="flex justify-center items-center bg-blue-500 w-8 h-8 rounded cursor-pointer">
              <FontAwesomeIcon className="text-white" icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div className="flex lg:justify-between overflow-hidden mt-10">
          <HouseCard />
          <HouseCard />
          <HouseCard />
        </div>
      </div>
      <div className="mt-24 flex flex-col justify-center">
        <h1 className="text-center text-3xl font-bold">How It <span className="text-blue-500">Works</span></h1>
        <p className="text-gray-400 text-center mt-10">The better impression it would make. An agency, in broad <br></br>terms, is any relationship between two parties in which.</p>
        <StepCards/>
        <CarouselIndicators/>
      </div>
    </div>
  );
}

export default App;
