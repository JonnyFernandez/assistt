import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'


const Signup = () => {
    const apiURL = 'http://localhost:3001/api/signup1'

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [entity, setEntity] = useState("")

    // console.log(entity);

    const handleChange = (e) => {
        const value = e.target.value
        setEntity(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(apiURL, { name, email, password, entity })

            if (!res.ok) {
                console.log('User create Successfully');
            } else {
                console.log('Something went wrong');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (

        <form className="form" onSubmit={handleSubmit} >
            <Link to={'/'}>Login</Link>
            <hr />

            <h1>Signup</h1>  <br />

            <label htmlFor="">Name: </label> <br />
            <input type="text" value={name}
                onChange={(e) => setName(e.target.value)} /> <br />

            <label htmlFor="">Email: </label> <br />
            <input type="text" value={email}
                onChange={(e) => setEmail(e.target.value)} />  <br />


            <label htmlFor="">Password</label> <br />
            <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} /> <br />


            <select onChange={handleChange}>
                <option value="Hospital">Hospital</option>
                <option value="Sanatorio">Sanatorio</option>
                <option value="Laboratorio">Laboratorio</option>
                <option value="Obra Social">Obra Social</option>

            </select>
            <br />


            <button>Login</button>
        </form>

    )
}

export default Signup;