import { useState } from "react";


const Signup = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")




    const handleSubmit = async (e) => {
        e.preventDefault()

    }

    return (

        <form className="form" onSubmit={handleSubmit} >

            <h1>Signup</h1>
            <label htmlFor="">Name:</label>
            <input type="text" value={username}
                onChange={(e) => setUsername(e.target.value)} />

            <label htmlFor="">Usercode</label>
            <input type="text" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <label htmlFor="">Password</label>
            <input type="password" value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <select>
                <option>Laboratorio</option>
                <option>Hospital</option>
                <option>Salita</option>
            </select>


            <button>Login</button>
        </form>

    )
}

export default Signup;