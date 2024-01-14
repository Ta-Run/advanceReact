import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState([])
  const [isloading, setIsLoading] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`https://dummyjson.com/users/${userId}`);
        console.log(result)
        setUser(result.data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <span > <h1 className='text-2xl text-center font-bold bg-amber-300 mt-5'> Profile</h1> </span>
      <img src={user.image} alt='profile'/>
      <table className='table-auto '>
        <thead>
          <tr>
            <th>Filed</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Age
            </td>
            <td> {user.age}</td>
          </tr>
          <tr>
            <td>
              First Name
            </td>
            <td> {user.maidenName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{user.lastName}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profile