import cp from '../assets/Create-profile.png';
import fp from '../assets/Search-partner.png';
import cmu from '../assets/communication.png'

const HowWark = () => {
    return (
        <div className='text-center p-4 shadow-md'>
             <h1 className="text-2xl md:text-4xl font-bold">How  <span className="text-3xl text-blue-600 md:text-5xl">Shadi Ghor.com</span> Works</h1>

             <p>Get started in bdmarriage.com in 3 easy step</p>
            
            <div className='flex flex-wrap justify-around items-center gap-4'>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Profile!</h2>
    <p>Create your detail profile, add photos and describe your partner preference</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={fp} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Profile!</h2>
    <p>Create your detail profile, add photos and describe your partner preference</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={cmu} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Create Profile!</h2>
    <p>Create your detail profile, add photos and describe your partner preference</p>
    <div className="card-actions">
      {/* <button className="btn btn-primary">Buy Now</button> */}
    </div>
  </div>
            </div>


            </div>
        </div>
    );
};

export default HowWark;