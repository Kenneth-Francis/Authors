import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Dashboard = () => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors`)
            .then(res => setAuthorList(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (deleteId) => {
        axios.delete(`http://localhost:8000/api/authors/${deleteId}`)
        .then(() => {
            removeFromDom(deleteId);
        })
        .catch(err => console.log(err));
    };

    const removeFromDom = (deletedId) => {
        const filteredList = authorList.filter((eachAuthor, idx) => eachAuthor._id !== deletedId);
        setAuthorList(filteredList);
    }
    
    
    return (
        <div className="card shadow">
                <Link className="text-end fs-5 text-success pe-2" to="/authors/new">Add An Author</Link>
            <div className="card-header">
                <h3 className="text-center text-warning-emphasis">We have quotes by:</h3>
            </div>
            <div className="card-body">
                <table className="table table-hover">
                    
                    <thead>
                        <tr>
                            <th scope="col" className="fs-5">Author:</th>
                            <th scope="col" className="text-center fs-5">Action:</th>
                        </tr>
                    </thead>

                    <tbody className="table-group-divider">
                        {
                            authorList.map(
                                (eachAuthor, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td className="align-middle fs-5 text-warning-emphasis">
                                                {eachAuthor.name}
                                            </td>

                                            <td>
                                                <Link to={`/authors/${eachAuthor._id}/edit`}>
                                                    <button className="btn w-50 btn-info">Edit</button>
                                                </Link>

                                                <button onClick={() => handleDelete(eachAuthor._id)} className="btn w-50 btn-danger float-end">Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard