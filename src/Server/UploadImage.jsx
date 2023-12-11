import myAxios from "./Axios";



const UploadImage =(imageFile) => {

   


    const image_upload_api = `https://api.imgbb.com/1/upload?key=3a3fb180cf28fe9e5503ebd5d1cb1d95`;
    
   
    
       return myAxios.post(image_upload_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        



   
};

export default UploadImage;