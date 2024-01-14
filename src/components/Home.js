import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Home = () => {
  const [users,setUsers] = useState([])
  const [isloading , setIsLoading] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://dummyjson.com/users');
        setUsers(result.data.users);
        setIsLoading(true); // Assuming you want to set isLoading to false when data fetching is done.
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Handle error state
      }
    };

    fetchData(); // Call the async function immediately
  }, []);
  // console.log(users)
  return (
    <container className= 'mx-auto'>
      <container className='grid grid-cols-3 gap-3 mx-auto '>
       {isloading?
        users.map((user)=>{
          console.log(user)
          const {firstName,lastName,image} = user
        return(
          <div key={user} className='border-4 border-slate-500'>
            {firstName}
            {lastName}
            <img src={image} alt='users'/>
            </div>
        )
        }):<>Loading data</>
      }
      </container>
    </container>
  )
}

export default Home