import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { Link } from "react-router-dom";

   
  export function ListProfileCard({data}) {




    return (
      <Card className="w-60">
        <CardHeader floated={false} className="h-56">
          <img className=" h-56 w-full" src={data.profile} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h6" color="blue-gray" className="mb-2">
            {data.name}
          </Typography>
          <Typography color="blue" className="font-medium" textGradient>
            District : {data.jela}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Age : {data.age}
          </Typography>


        <div className="flex justify-center gap-7">
        <Tooltip content="Like">
            <Typography
              as="a"
              href="#facebook"
            >
             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
            </Typography>
          </Tooltip>
          <Tooltip content="Mail">
            <Typography
              as="a"
              href="#twitter"
             
            >
             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><style>  </style><path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
            </Typography>
          </Tooltip>
          <Tooltip content="Contact">
            <Typography
              as="a"
              href="#instagram"
            
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/></svg>
            </Typography>
          </Tooltip>
        </div>

        </CardBody>
        <CardFooter className="flex justify-center gap-7">
         <Link to={`/viewProfile/${data.id}`}> <button className="btn btn-outline ">View Profile</button> </Link>
        </CardFooter>
      </Card>
    );
  }