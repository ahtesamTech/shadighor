
import './App.css'
import Navber from './components/Navber';
import HomeVideoBg from './components/HomeVideoBg';
import PrimiumPlan from './layout/PrimiumPlan';
import HowWark from './layout/HowWark';
import WhyWeAre from './layout/WhyWeAre';
import DownloadApp from './layout/DownloadApp';
import Footer from './layout/Footer';
import FindLayout from './components/FindLayout';



function App() {
 
 
  return (
    <div>
     <div className='relative w-full'>
    <HomeVideoBg></HomeVideoBg>

     <div className='absolute top-0 w-full '> <Navber></Navber>  </div>

     <div className='absolute flex justify-center text-center  bottom-1/2 w-full'>
      <h1 className='leading-loose text-black text-2xl sm:text-3xl md:text-4xl font-bold w-full mx-5 sm:m-0 sm:max-w-lg md:max-w-md'> বিশ্বস্ত এবং  নিরাপদ
     বাংলাদেশের বিবাহ সাইট</h1>
    </div>

    <div className='absolute bottom-0 sm:bottom-10 w-full p-2 text-center'>
    <FindLayout></FindLayout>
    </div>


      </div>

      
      <div className='p-4'>
          <HowWark></HowWark>
        </div>

        <div>
          <WhyWeAre></WhyWeAre>
        </div>

      <div className='p-2 my-2'>
      <PrimiumPlan></PrimiumPlan>
      </div>

    <div>
      <DownloadApp></DownloadApp>
    </div>


    <Footer></Footer>
    </div>
  )
}


export default App
