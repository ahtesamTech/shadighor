import { useLocation } from "react-router-dom";
import { ListProfileCard } from "../components/ListProfileCard";
import Navber from "../components/Navber";
import { useEffect, useState } from "react";
      
 

const ListPage = () => {

    const [userData , setUserData] = useState([]);

    const location = useLocation();
//   const serverData = location.state?.finded;
  
  useEffect(()=>{

    setUserData(location.state?.finded)
    // console.log(userData);

  },[location.state?.finded, userData])

  

  

    return (
        <div>
            <Navber></Navber>
            <section className="max-w-5xl p-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-4">
        
        {
            userData.map(data => <ListProfileCard key={data.id} data={data}></ListProfileCard>)
        }





            </section>

        </div>
    );
};

export default ListPage;