import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const UpdateAuthor = () => {
    const [name, setName] = useState("");

    const { id } = useParams();

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                const author = res.data;
                setName(author.name);
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/authors/${id}`, {name})
            .then(() => navigate('/authors'))
            .catch(err => {
                const errResponse = err.response.data.errors;
                const errArr = [];
                for (const key in errResponse) {
                    errArr.push(errResponse[key].message)
                }
                setErrors(errArr);
            });
    }

    return(
        <div className="card-body">
            <div className="card shadow">
                <Link className="text-end fs-5 text-primary-emphasis pe-2" to="/authors">Home</Link>
                <div className="card-header">
                    <h3 className="text-primary-emphasis text-center">Edit Author</h3>
                </div>

                <div className="card-body w-75 m-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label fs-5">Name: </label>
                            <input className="form-control" name="name" type="text" value={name}
                                onChange={e => setName(e.target.value) }/>
                        </div>

                        <input className="form-control btn btn-success w-25 float-end" type="submit" value="Save" />
                    </form>
                    {
                        errors.map((err, idx) => {
                            return <p key={idx} className="text-warning">{err}</p>;
                        })
                    }
                </div>


            </div>
        </div>
    )
}

export default UpdateAuthor