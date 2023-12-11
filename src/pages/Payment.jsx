import React, { useContext } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
 
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../Server/AuthContext";
import { useNavigate } from "react-router-dom";
import myAxios from "../Server/Axios";
import Swal from "sweetalert2";

 

export default function Payment() {
 

    const { register, handleSubmit, formState: { errors } } = useForm();
  const {user} = useContext(AuthProvider)
const navigate = useNavigate();
  const pay = (data)=>{
        
    const payData = {
        name : user.name,
        number: data.number,
        trnID : data.trnID,
        amount: 750
    }

myAxios.post('/payment', payData).then(res =>{

    if(res.data.success){
        Swal.fire({
            title: 'Payment Success. Wait For Confirmation',
            icon: 'success',
            timer: 1500
        })
navigate('/')
    }
})
  }
 
  return (
   <div className="flex h-screen justify-center items-center">
     <Card className="w-full max-w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center px-4 py-8 text-center"
      >
       
        <Typography variant="h5" color="white">
        সেন্ডমানি করে ফরম পূরন করুন <br /> <span className="text-blue-700 font-extrabold text-3xl">৭৫০৳ মাত্র</span>
        </Typography>
      </CardHeader>
      <CardBody>
        <div  className="overflow-visible">
         
          <div
            className="!overflow-x-hidden !overflow-y-visible"
           
          >

    <Typography
      variant="h6"
      color="blue-gray"
      className="mb-2 font-medium">
        পার্সোনাল <br />
        বিকাশ : 01660193504 <br />
        নগদ : 01813102723
    </Typography>

          
              <form className="mt-12 flex flex-col gap-4" onSubmit={handleSubmit(pay)}>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Phone Number
                  </Typography>
                  <Input
                    type="number"
                  {...register('number')}
                    placeholder="01..........."
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
 
                <div className="my-3">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-2 font-medium "
                    
                  >
                    Transaction ID
                  </Typography>
 
                  <Input
                    maxLength={19}  
                     placeholder="0000 0000 0000 0000"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    {...register('trnID')}
                  />
                 
                
                </div>
                <Button type="submit" size="lg">Pay Now</Button>
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center justify-center gap-2 font-medium opacity-60"
                >
                   Payments are
                  secure and encrypted
                </Typography>
              </form>
          
           
          </div>
        </div>
      </CardBody>
    </Card>
   </div>
  );
}