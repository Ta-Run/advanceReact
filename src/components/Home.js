import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Home = () => {
  const [users, setUsers] = useState([])
  const [isloading, setIsLoading] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://dummyjson.com/users');
        setUsers(result.data.users);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  // console.log(users)
  return (
    <container className=' mx-auto px-4'>
      <container className='grid grid-cols-3 gap-3 mx-auto '>
        {isloading ?
          users.map((user) => {
            const { firstName, lastName, image, id } = user
            return (
              <div key={user.id} className='border-4 border-slate-500 rounded-l-lg '>
                <div className='bg-gray-400 text-2xl flex'>{id}
                 <p className='px-2 font-extrabold'> {firstName} </p>
                  <p className='font-extrabolds'>{lastName} </p>
                </div>
                <img src={image} alt='users' className='h-56 w-56' />
                <div  className='text-xl text-blue-700 font-extrabold text-center bg-emerald-300'>
                <Link to={`userProfile/${id}`}>Load More ...</Link>
                </div>
              </div>
            )
          }) : <>Loading data</>
        }
      </container>
    </container>
  )
}

export default Home