import React, { useState } from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import { useAuthContext } from "../context/AuthContext";
import { BsTwitterX } from "react-icons/bs";
const Register = () => {
  const { register, signGoogleProvider, signTwitterProvider } = useAuthContext()
  // const [email,setEmail] = useState("")
  // const [password,setPassword] = useState("")
  // const [firstName,setFirstName] = useState("")
  // const [lastName,setLastName] = useState("")

  const [info,setInfo] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
  })

  const handleChange = (e) => {
    // console.log(e.target.name);
    setInfo({...info,[e.target.name]:e.target.value}) // setter methodu her zaman asenkron calisir \\
  }
  console.log(info);

  const handleSubmit = (e) => {
    e.preventDefault()
    const {email,password,firstName,lastName} = info;
    register(email,password, `${firstName} ${lastName} `)
  }

  return (
    <div className="overflow-hidden flex-1 h-screen justify-center items-center bg-[#23242a]">
      <div
        className={`mt-[3vh] mx-auto overflow-hidden relative w-[380px] h-[620px] rounded-[8px] bg-[#1c1c1c] before:content-[""] before:absolute before:w-[380px] before:h-[420px] before:top-[-50%] before:left-[-50%] after:content-[""] after:absolute after:w-[380px] after:h-[420px] after:top-[-50%] after:left-[-50%] custom-linear-gradient`}
      >
        <form onSubmit={handleSubmit} className="absolute inset-[2px] rounded-[8px] bg-gray-100 dark:bg-[#28292d] z-[10] flex flex-col py-[50px] px-[40px]">
          <h2 className="text-red-main text-2xl font-[500] text-center tracking-[0.1em] mb-3">
            Sign Up
          </h2>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={info.firstName}
              // onChange={(e)=>setInfo({...info,firstName:e.target.value})}
              onChange={handleChange}
              className="peer"
              placeholder=" "
              required />
            <label htmlFor="firstName" >First Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text"
              name="lastName"
              id="lastName"
              value={info.lastName}
              // onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
              onChange={handleChange}
              className="peer"
              placeholder=" " required />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input name="email"
              id="email"
              value={info.email}
            // onChange={(e) => setInfo({ ...info, email: e.target.value })}
              onChange={handleChange}
              className="peer"
              placeholder=" " type="email" />
            <label htmlFor="email">Email</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="password"
              name="password"
              id="password"
              value={info.password}
              // onChange={(e) => setInfo({ ...info, password: e.target.value })}
              onChange={handleChange}
              className="peer"
              placeholder=" " />
            <label htmlFor="password">Password</label>
          </div>
          <button className="btn-danger" type="submit">Register</button>
          <button onClick={signGoogleProvider} className="btn-danger flex justify-evenly" type="button">
            Continue with Google
            <GoogleIcon color="currentColor" />
          </button>
          <button onClick={signTwitterProvider} target="_blank" className="btn-danger flex justify-around" type="button">
            Continue with X
            <BsTwitterX fontSize="1.5rem" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
