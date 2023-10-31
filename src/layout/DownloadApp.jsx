import MobileStoreButton from 'react-mobile-store-button';
import appSS from '../assets/appSS.jpeg'

const DownloadApp = () => {

    const iOSUrl = 'https://play.google.com/store/apps/details?id=com.tech_land.shadighor&hl=en&gl=US';
       

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center p-0 md:p-10">

        <img className="w-2/6" src={appSS} alt="" srcSet="" />

    <div className="max-w-md">

        <div>
            <p>Connect With Us</p>
            <h1 className='text-blue-600 text-4xl'>ShadiGhor.com <span className='text-red-500 text-4xl'>App</span></h1>
        </div>

            <div>
                <MobileStoreButton
                  store="android"
                  url={iOSUrl}
                  linkProps={{ title: 'iOS Store Button' }}
                />
            </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default DownloadApp;