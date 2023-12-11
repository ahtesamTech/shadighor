import { Link, useLoaderData } from "react-router-dom";
import Navber from "../components/Navber";
import { useContext } from "react";
import { AuthProvider } from "../Server/AuthContext";
import myAxios from "../Server/Axios";
import Swal from 'sweetalert2'

const ViewProfile = () => {

const userData = useLoaderData();
const {user} = useContext(AuthProvider);
// console.log(userData);

const dob = userData.datetime?.split('T')


const sendRequerst = ()=>{

    const targetUserName = userData.name;
    const targetUserPhone = userData.phone;
    

    const requestData = {
        fromUserName : user.name,
        fromUserPhone : user.phone,
        toUserName : targetUserName,
        toUserPhone : targetUserPhone
    }

    // console.log(requestData);

    myAxios.post('/sendRequest', requestData)
    .then(res =>{

        // console.log(res.data);
        if (res.data.success) {

            Swal.fire({
                title : res.data.message,
                icon : 'success',
                timer: 1500
            })
            
        } else{

        

        Swal.fire({
            title :"Request send Faild",
            icon : 'error',
            timer: 1500
        })
    }

    })







}








// console.log(dob);

    return (
        <div>
            <Navber></Navber>

            {/* ////////////////////////////////////////////////////////// */}
            
            <div className="p-16">
                <div className="p-8 bg-white shadow mt-24">  
            <div className="grid grid-cols-1 lg:grid-cols-3">    
            <div className="grid grid-cols-3 text-center order-last lg:order-first mt-20 lg:mt-0">      
            <div>        
                <p className="font-bold text-orange-700 text-xl">{userData.age}</p>        
                <p className="text-gray-400">Age</p>      
                </div>      
                <div>           
                    <p className="font-bold text-green-700 text-xl">{userData.id}</p>        
                    <p className="text-gray-400">ID</p>      
                    </div>          
                    <div>           
                        <p className="font-bold text-blue-700 text-xl">{dob[0]}</p>        
                        <p className="text-gray-400">Date Of Birth</p>      
                        </div>    </div>    <div className="relative">      
                        <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                           <img className="w-48 h-48 bg-indigo-100 mx-auto rounded-full " src={userData?.profile} alt="" srcSet="" />      
                             </div>    
                             </div> 
                                {
                                    user ?   <div className="space-x-8 flex  mt-32 lg:mt-0 justify-center">
                                    {
                                        user?.premium ? <button 
                                        onClick={sendRequerst}
                                        className="text-white  px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg transition transform hover:-translate-y-0.5 font-semibold">  Request</button>  :  <div className="space-x-8 flex  mt-32 lg:mt-0 justify-center">
                                    
                                        <button 
                                        className="text-white  py-2 px-4 uppercase rounded bg-gray-400 cursor-not-allowed hover:bg-gray-500 shadow hover:shadow-lg transition transform hover:-translate-y-0.5 font-semibold">  Request</button> <Link to={'/payment'}> <button  className="text-white py-2 px-4 uppercase rounded bg-green-700 hover:bg-green-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">  Payment</button></Link>  
                                    
                                     
                                      
                                     </div> 
                                    }
                                     
                                      
                                     </div>  :  <div className="space-x-8 flex  mt-32 lg:mt-0 justify-center">
                                
                                     
                                
                                    <button 
                                    className="text-white   px-4 uppercase rounded bg-gray-400 cursor-not-allowed hover:bg-gray-500 shadow hover:shadow-lg transition transform hover:-translate-y-0.5 ">  Request</button>  
                                    <button 
                                    className="text-white   px-4 uppercase rounded bg-gray-400 cursor-not-allowed hover:bg-gray-500 shadow hover:shadow-lg transition transform hover:-translate-y-0.5 ">  Payment</button>  
                                
                                 
                                  
                              
                                
                                 
                                  
                                 </div> 

                                }
                            
                             
                             
                                 </div>  
                                 <div className="mt-20 text-center border-b pb-12">  
                                 {
                                    user ? "" :<p className="text-red-600 font-bold shadow-md">Log In For Active Button</p> 
                                 } 
                                 <h1 className="text-4xl font-medium text-gray-700">{userData.name}</h1>    
                                 <p className="font-light text-gray-600 mt-3">{userData.address}, {userData.jela}</p>    
                                 <p className="mt-8 ">Occupations  -{userData.occupation} </p>    
                                 <p className="mt-2 ">Education : {userData.education}</p>  
                                 </div>  
                                 <div className="mt-12 flex flex-col justify-center">    
                                 <p className="text-gray-600 text-center font-light lg:px-16">Bio :: {userData.bio}</p>    
                                
                                 </div>
                                 <div className="mt-20 text-center border-t py-12">    
                                   
                                 


   <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
    <div className="flex flex-col justify-center h-full">
        
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800">Personal Information</h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full grid grid-cols-1 md:grid-cols-2">

                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Father Name</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.fatherName} </div>
                                </td>
                            </tr>
                        </tbody>
                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Mother Name</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.matherName} </div>
                                </td>
                            </tr>
                        </tbody>

                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Father Occupation</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.faOcco} </div>
                                </td>
                            </tr>
                        </tbody>


                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Mother Occupation</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.maOcco} </div>
                                </td>
                            </tr>
                        </tbody>


                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Religion</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.religion} </div>
                                </td>
                            </tr>
                        </tbody>

                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Married Status</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.status} </div>
                                </td>
                            </tr>
                        </tbody>

                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Height</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.height} </div>
                                </td>
                            </tr>
                        </tbody>



                        <thead className="text-xs font-semibold uppercase text-orange-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Gender</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                            <tr>
                                <td className="p-2 whitespace-nowrap">
                                    <div className="text-left"> {userData.gender} </div>
                                </td>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    </div>
    </section>



                                 </div> 
                                 </div>
                                 </div>
            
            {/* ////////////////////////////////////////////////////////// */}


        </div>
    );
};

export default ViewProfile;