import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import myAxios from '../Server/Axios';
import { AuthProvider } from '../Server/AuthContext';

function generateAgeOptions(start, end) {
  const options = [];
  for (let age = start; age <= end; age++) {
    options.push(<option key={age} value={age}>{age}</option>);
  }
  return options;
}

const FindLayout = () => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedAgeFrom, setSelectedAgeFrom] = useState('');
  const [selectedAgeTo, setSelectedAgeTo] = useState('');
  const [selectedReligion, setSelectedReligion] = useState('');

  const naviget = useNavigate()
  const {user} = useContext(AuthProvider);

  const ageOptions = generateAgeOptions(18, 99);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission logic here
  

    try {
      // Fetch data from the server
     user ? myAxios(`/findUsers?gender=${selectedGender}&ageFrom=${selectedAgeFrom}&ageTo=${selectedAgeTo}&religion=${selectedReligion}`)
     .then(res => {
      const userData = res.data;
      // console.log(user.mail);
      // Assuming you have an email criteria, replace 'YOUR_EMAIL_CRITERIA' with the actual email you are looking for
      const filteredUsers = userData.filter(users => users.mail !== user.mail );
  
      if (filteredUsers.length > 0) {
        naviget('/find', {
          state: { finded: filteredUsers },
        });
        // console.log(filteredUsers);
      } else {
        // Handle the case when no users match the criteria
        console.log('No users found with the specified email criteria');
      }
      

     }) :  myAxios(`/findUsers?gender=${selectedGender}&ageFrom=${selectedAgeFrom}&ageTo=${selectedAgeTo}&religion=${selectedReligion}`)
     .then(res => {
       const finded = res.data;
       if (finded) {
         naviget('/find', {
           state: { finded },
         });
       } 
      

     }) 

      // Navigate to the "find" page with the server data as parameters
     
    } catch (error) {
      console.error('Error fetching data from server:', error);
    }




    
  };

  return (
    <div className="bg-white w-full max-w-4xl mx-auto h-full flex flex-col sm:flex-row sm:items-center md:flex-col p-2 sm:p-5 justify-center items-center gap-1 shadow-lg bg-opacity-50 rounded-md">
      <h3 className="text-2xl font-bold text-blue-900">Find Your Partner</h3>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 font-light text-base sm:grid-cols-3 lg:flex sm:gap-5 gap-2 justify-center">
          <div>
            <select
              className="select text-xs h-0 sm:h-full sm:w-40 border border-deep-orange-800"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              <option disabled value="">Looking For..</option>
              <option value="female">Woman</option>
              <option value="male">Man</option>
            </select>
          </div>

          <div>
            <select
              className="select text-xs sm:w-40 border border-deep-orange-800"
              value={selectedAgeFrom}
              onChange={(e) => setSelectedAgeFrom(e.target.value)}
            >
              <option disabled value="">Select Age from</option>
              {ageOptions}
            </select>
          </div>

          <div>
            <select
              className="select text-xs sm:w-40 border border-deep-orange-800"
              value={selectedAgeTo}
              onChange={(e) => setSelectedAgeTo(e.target.value)}
            >
              <option disabled value="">Select Age to</option>
              {ageOptions}
            </select>
          </div>

          <div>
            <select
              className="select text-xs sm:w-40 border border-deep-orange-800"
              value={selectedReligion}
              onChange={(e) => setSelectedReligion(e.target.value)}
            >
              <option disabled value="">Select Religion</option>
              <option value="Christianity">Christianity</option>
              <option value="Muslim">Islam</option>
              <option value="Hindus">Hinduism</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Judaism">Judaism</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <button className=" bg-blue-700 border-none rounded-md font-normal text-base w-full sm:w-40 hover:bg-blue-500" type="submit">
            Find
          </button>
        </div>
      </form>
    </div>
  );
};

export default FindLayout;
