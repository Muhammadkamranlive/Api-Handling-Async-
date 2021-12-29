
import axios from 'axios';
import React, { useEffect,useState } from 'react'

const Main = () =>
{
    const [counter, setCounter] = useState(0);
    const [username, setusername] = useState('Muhammad Kamran');
    const [person, setPerson] = useState([]);
    const change = () =>
    {
        setCounter(counter + 1);
        setusername('Muhammad ali');
    }
    
    const getData = async () =>
    {
       await axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) =>
        {
            setPerson(res.data);
         })
    }
   
     
    useEffect(() => {
       
        getData();
        
    }, [person])

   
   
    return (  
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="text-center">Api Reuqest with Hooks { counter}</h1>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <table className="table">
                            <thead>
                                <tr>
                                    <td>id</td>
                                    <td>name</td>
                                        <td>Username{ username}</td>
                                                <td>email</td>
                                                <td>addres</td>
                                                <td>Phone</td>
                                        <td>website</td>
                                        <td>Change State <button className="btn btn-primary" onClick={change}>Change</button></td>
                                     </tr>
                                </thead>
                                
                                <tbody>
                                    {
                                        person.map((list) =>
                                        {
                                            return (
                                                <>
                                                    <tr>
                                                    <td>{list.id}</td>
                                                                <td>{list.name}</td>
                                                                <td>{list.username}</td>
                                                                <td>{list.email}</td>
                                                                <td>{list.address.city,list.address.street}</td>
                                                                <td>{list.phone}</td>
                                                                <td>{list.website}</td>
                                                     </tr>
                                                </>
                                           )
                                       })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
         </div>
        </>

    );
}
 
export default Main;