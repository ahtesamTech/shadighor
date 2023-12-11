import { useForm } from "react-hook-form"
import UploadImage from "../Server/UploadImage";
import myAxios from "../Server/Axios";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthProvider } from "../Server/AuthContext";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import Swal from "sweetalert2";




const RegisterSteper = () => {
   
  
  const ageOptions = generateAgeOptions(18, 99);

  const [value, setValue] = useState()


  function generateAgeOptions(start, end) {
    const options = [];
    for (let age = start; age <= end; age++) {
      options.push(<option key={age} value={age}>{age}</option>);
    }



    return options;
  }
 
  const { register, handleSubmit,formState: { errors }  } = useForm();

const { login} = useContext(AuthProvider);

  const onSubmit = (data) =>{
    
// console.log(data);




const imageFile = { image: data.profileImage[0] }
console.log(imageFile);

UploadImage(imageFile).then(res =>{

  // console.log(res.data.data.display_url);

    if(res.data.success){

        
    const sendData = {
      
      name : data.name,
      profile: res.data.data.display_url,
      mail: data?.email,
      password : data?.pass,
              phone: data.phone,
              address: data.address,
              jela: data.distric,
              datetime: data.dob,
              height: data.height,
              education: data.education,
              age: data.age,
              gender: data.gender,
              status: data.status,
              religion: data.religion,
              approvel : false ,
              premium : false,
              bio: data.bio,
              fatherName: data.fatherName,
              matherName: data.motherName,
              faOcco: data.father_occupation,
              maOcco: data.mother_occupation,
              occupation: data.occupation,

              
              
              
             
    }



    myAxios.post('/register', sendData).then(res =>{

      // console.log(res.data);
      if(res.data.success){

        login(sendData);
        Swal.fire({
          title: 'Registration Success',
          icon: 'success',
          timer : 1500
        });
        <Navigate to={'/'} replace></Navigate>
      }


    })

      
    }









})



  }




  return (
    <div className='max-w-7xl mx-auto text-center p-4'>
      <div className='text-3xl text-blue-600 font-semibold my-5'>ফরম পূরণ </div>

      <div className="">
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">পূর্ণ নাম</span>
              </label>
              <input
                name="name"
                {...register('name',{required: true})}
                type="text"
                
                
                placeholder="পূর্ণ নাম"
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">প্রোফাইল</span>
              </label>
              <input
                name="profileImage"
                {...register('profileImage',{required:true})}
                type="file"
                
                className="input input-bordered"
                
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">ইমেইল</span>
              </label>
              <input
                name="email"
                {...register('email')}
                type="text"
               
                
                placeholder="ইমেইল"
                className="input input-bordered"
                
              />
            </div>



            
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">পাসওয়ার্ড</span>
              </label>
              <input
                name="pass"
                {...register('pass')}
                type="password"
               
                
                placeholder="পাসওয়ার্ড"
                className="input input-bordered"
                
              />
            </div>




            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">ফোন নাম্বার</span>
              </label>
              <input
        className='input input-bordered'
      {...register('phone',{maxLength: 11, minLength : 11})}
      value={value}
      onChange={setValue} />
      {errors.phone?.type === 'minLength' && <p role="alert">Type Correct Phone Number</p>}
            </div>

            <div className="form-control w-full">
            <label className="label">
                <span className="label-text">বয়স</span>
              </label>
            <select
            name="age"
            {...register('age')}
               className="select select-bordered"
             
              
            >
              <option disabled value="">বয়স</option>
              {ageOptions}
            </select>
          </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">উচ্চতা</span>
              </label>
              <input
                name="height"
                {...register('height')}
                type="text"
                
                
                placeholder="উচ্চতা"
                className="input input-bordered"
                
              />
            </div>


            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">জন্ম তারিখ</span>
              </label>
              <input
                name="dob"
                {...register('dob')}
                type="date"
                
                placeholder="জন্ম তারিখ"
                className="input input-bordered"
                
              />
            </div>



            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">পেশা</span>
  </label>
  <select
    name="occupation"
    {...register('occupation')}
    
    className="select select-bordered"
    
  >
  <option value="" disabled>পেশা নির্বাচন করুন</option>
  <option value="ছাত্র/ছাত্রী">ছাত্র/ছাত্রী</option>
  <option value="পেশাদার">পেশাদার</option>
  <option value="অবসরপ্রাপ্ত">অবসরপ্রাপ্ত</option>
  <option value="সরকারি চাকরি">সরকারি চাকরি</option>
  <option value="ব্যবসা">ব্যবসা</option>
  <option value="বেকার">বেকার</option>
  <option value="প্রাইভেট চাকরি">প্রাইভেট চাকরি</option>
  <option value="অন্যান্য">অন্যান্য</option>
  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">শিক্ষা</span>
  </label>
  <select
    name="education"
    {...register('education')}
   
    
    className="select select-bordered"
    
  >
  <option value="" disabled>শিক্ষা নির্বাচন করুন</option>
  <option value="JSC">JSC</option>
  <option value="JDC">JDC</option>
  <option value="SSC">SSC</option>
  <option value="DAKHIL">DAKHIL</option>
  <option value="HSC">HSC</option>
  <option value="ALIM">ALIM</option>
  <option value="HIGHER LEVEL">HIGHER LEVEL</option>
  <option value="অন্যান্য">অন্যান্য</option>
  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">লিঙ্গ</span>
  </label>
  <select
    name="gender"
   {...register('gender')}
    
    className="select select-bordered"
    
  >
  <option value="" disabled>লিঙ্গ নির্বাচন করুন</option>
  <option value="MALE">MALE</option>
  <option value="FEMALE">FEMALE</option>
  <option value="অন্যান্য">অন্যান্য</option>
  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">বিবাহ অবস্থা</span>
  </label>
  <select
    name="status"
    {...register('status')}
    className="select select-bordered"
    
  >
  <option value="" disabled>বিবাহ অবস্থা নির্বাচন করুন</option>
  <option value="অবিবাহিত">অবিবাহিত</option>
<option value="বিবাহিত">বিবাহিত</option>
<option value="তালাকপ্রাপ্ত">তালাকপ্রাপ্ত</option>

  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>
            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">ধর্ম</span>
  </label>
  <select
    name="religion"
    {...register('religion')}
    
    className="select select-bordered"
    
  >
  <option value="" disabled>ধর্ম নির্বাচন করুন</option>
  <option value="ইসলাম">ইসলাম</option>
<option value="হিন্দু">হিন্দু</option>
<option value="খ্রিস্টান">খ্রিস্টান</option>
<option value="অন্যান্য">অন্যান্য</option>

  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>



            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">পিতার নাম</span>
              </label>
              <input
                name="fatherName"
                {...register('fatherName')}
                type="text"
                
                placeholder="পিতার নাম"
                className="input input-bordered"
                
              />
            </div>


            <div className="form-control w-full">
  <label className="label">
    <span className="label-text">মায়ের নাম</span>
  </label>
  <input
    name="motherName"
    {...register('motherName')}
    type="text"
    
    placeholder="মায়ের নাম"
    className="input input-bordered"
    
  />
</div>

<div className="form-control w-full">
  <label className="label">
    <span className="label-text">পিতার পেশা</span>
  </label>
  <select
    name="father_occupation"
    {...register('father_occupation')}
   
    className="select select-bordered"
    
  >
    <option value="" disabled>পিতার পেশা নির্বাচন করুন</option>
  <option value="সরকারি চাকরি">সরকারি চাকরি</option>
  <option value="ব্যবসা">ব্যবসা</option>
  <option value="বেকার">বেকার</option>
  <option value="প্রাইভেট চাকরি">প্রাইভেট চাকরি</option>
  <option value="অন্যান্য">অন্যান্য</option>
  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>


<div className="form-control w-full">
  <label className="label">
    <span className="label-text">মায়ের পেশা</span>
  </label>
  <select
    name="mother_occupation"
    {...register('mother_occupation')}
   
    className="select select-bordered"
    
  >
    <option value="" disabled>মায়ের পেশা নির্বাচন করুন</option>
  <option value="গৃহিণী">গৃহিণী</option>
  <option value="সরকারি চাকরি">সরকারি চাকরি</option>
  <option value="প্রাইভেট চাকরি">প্রাইভেট চাকরি</option>
  <option value="অন্যান্য">অন্যান্য</option>
  {/* প্রয়োজন হলে আরও অপশন যোগ করুন */}
  </select>
</div>



<div className="form-control w-full">
              <label className="label">
                <span className="label-text">ঠিকানা</span>
              </label>
              <input
                name="address"
                type="text"
                {...register('address')}
                placeholder="ঠিকানা"
                className="input input-bordered"
                
              />
            </div>
<div className="form-control w-full">
              <label className="label">
                <span className="label-text">জেলা</span>
              </label>
              <input
                name="distric"
                type="text"
                {...register('distric')}
                placeholder="জেলা"
                className="input input-bordered"
                
              />
            </div>

 


          
          </div>

<div className="form-control w-full">
<textarea placeholder=" জীবনবৃত্তান্ত" className="border-spacing-1 rounded-md p-2 m-1 border-2" {...register('bio')}  name="bio" id="" cols="30" rows="10"></textarea>

</div>

    
          <input type="submit" className="my-5 w-full btn btn-secondary" value="জমা" />
        </form>
      </div>
      <Link to={'/login'}>I have a Accounte</Link>
    </div>
  );
};

export default RegisterSteper;
