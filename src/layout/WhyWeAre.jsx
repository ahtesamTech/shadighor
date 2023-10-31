import wm from '../assets/why.jpg'
import '../App.css'
import { Typography } from '@material-tailwind/react';


function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }



const WhyWeAre = () => {
    return (
        <div>

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content">
    <div className="">

    <h2 className="card-title justify-center m-4 text-lg sm:text-4xl w-full">Why choose <span className='text-blue-600 text-xl sm:text-5xl'>ShadiGhor.com</span></h2>

    <div className="card lg:card-side bg-base-100 shadow-xl p-4">
  <figure><img className='w-96' src={wm} alt="Album"/></figure>
  <div className="card-body">
    
    <div>
   

       <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Register for Free!</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">100% human verified profiles</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Private, personalized, and highly confidential service</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Halal, safe and secured Matrimony site in Bangladesh</Typography>
          </li>
         
          </ul>
    </div>
    
  </div>
    </div>


    </div>
  </div>
</div>




           
        </div>
    );
};

export default WhyWeAre;