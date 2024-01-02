"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  SuccessToast,
} from "@/utility/FormHelper";
import { Toaster } from "react-hot-toast";

export default function page() {

  const router = useRouter();

  let [FormValue, SetFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });
  const InputOnChange = (InputName, InputValue) => {
    SetFormValue((PreValue) => ({
      ...PreValue,
      [InputName]: InputValue,
    }));
  };

  let name = FormValue.name;
  let email = FormValue.email;
  let password = FormValue.password;
  

  const FormSubmit = async (e) => {
    
    e.preventDefault();
   
   
    
    if (IsEmpty(name)) {
      ErrorToast("Name Required!");
    } 
    else if (IsEmail(email)) {
      ErrorToast("Email address is not valid!");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required!");
    } 
    
    else {
      let res = await axios.post("api/user/signup", {
        name,
        email,
        password,

      });


      if (res.data.status === "Success") {
        SuccessToast("Registration Success!");
        router.replace("/");
      } 
      else {
        ErrorToast("Something Went Wrong");
      }
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">SignUp Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={FormSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    type="text"
                    placeholder="full name"
                    className="input input-bordered"
                    required
                    value={FormValue.name}
                    onChange={(e) => InputOnChange("name", e.target.value)}
                  />
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    value={FormValue.email}
                    onChange={(e) => InputOnChange("email", e.target.value)}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>

                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    value={FormValue.password}
                    onChange={(e) => InputOnChange("password", e.target.value)}
                  />

                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign UP !</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import { useRef } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import {
//   ErrorToast,
//   IsEmail,
//   IsEmpty,
//   SuccessToast,
// } from "@/utility/FormHelper";
// import { Toaster } from "react-hot-toast";

// export default function page() {
//     let NameRef,EmailRef,PasswordRef = useRef();
//     const router = useRouter();

//   const handelSubmit = async (e) => {
//     e.preventDefault();

//     let name = NameRef.value;
//     let email = EmailRef.value;
//     let password = PasswordRef.value;

//     console.log(
//         name, email, password
//     )

//     if (IsEmpty(email)) {
//       ErrorToast("Email Required!");
//     } else if (IsEmail(email)) {
//       ErrorToast("Email address is not valid!");
//     } else if (IsEmpty(password)) {
//       ErrorToast("Password Required!");
//     } else if (IsEmpty(name)) {
//       ErrorToast("Full Name Required!");
//     }
//      else {
//       let res = await axios.post("api/user/signup", {
//         email,
//         password,
//         name
//       });
//       if (res.data.status === "Success") {
//         SuccessToast("Registration Success!");
//         router.replace("/");
//       } else {
//         ErrorToast("Something Went Wrong");
//       }
//     }
//   };

//   return (
//     <>
//     <Toaster position="top-center" reverseOrder={false} />
//     <div>
//         <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row-reverse">
//     <div className="text-center lg:text-left">
//       <h1 className="text-5xl font-bold">SignUp Now!</h1>
//       <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//     </div>
//     <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form className="card-body" onSubmit={handelSubmit}>

//         <div className="form-control">
//         <label className="label">
//             <span className="label-text">Name</span>
//           </label>

//           <input type="text" placeholder="full name" className="input input-bordered" required
//             ref={(input) => (NameRef = input)}
//           />
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" placeholder="email" className="input input-bordered" required
//             ref={(input) => (EmailRef = input)}
//           />

//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>

//           <input type="password" placeholder="password" className="input input-bordered" required

//           ref={(input) => (PasswordRef = input)}
//           />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Login</button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//     </div>
//     </>
//   )
// }
