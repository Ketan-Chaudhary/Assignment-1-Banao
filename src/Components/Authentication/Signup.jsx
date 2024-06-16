// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import Login from "./Login";
// import { useToast } from "@chakra-ui/react";
// const Signup = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const toast = useToast();
//   return (
//     <section>
//       <dialog id="my_modal_1" className="modal ">
//         <div className="modal-box bg-transparent max-w-5xl shadow-none justify-center flex">
//           <div className="modal-action">
//             <form method="dialog" className="bg-black">
//               <button className="btn btn-sm btn-circle  absolute  right-2 top-2">
//                 ✕
//               </button>
//             </form>
//             <div className="bg-white w-[46rem] h-[35rem] rounded-xl">
//               <div className="bg-[#EFFFF4]  text-[#008A45] w-[46rem] h-[3.2rem] topMdl text-center m-auto text-[14px] rounded-xl items-center flex justify-center">
//                 {" "}
//                 Let's learn, share & inspire each other with our passion for
//                 computer engineering. Sign up now 🤘🏼
//               </div>
//               <div className="flex gap-3 justify-between text-black">
//                 <div className="right-modal mt-[1.5rem] ml-[2.25rem] w-[20rem] h-[20rem]">
//                   <div className="text-[24px] font-bold"> Create Account</div>
//                   <div className="mt-[1.5rem]  h-[15rem] ">
//                     <div className="flex w-[20rem]">
//                       <label className="input input-bordered flex items-center w-1/2 gap-2 bg-[#F7F8FA] rounded-none">
//                         <input
//                           type="text"
//                           className="grow"
//                           placeholder="First Name"
//                         />
//                       </label>
//                       <label className="input input-bordered flex items-center w-1/2 gap-2 rounded-none bg-[#F7F8FA] ">
//                         <input
//                           type="text"
//                           className="grow"
//                           placeholder="Last Name"
//                         />
//                       </label>
//                     </div>

//                     <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
//                       <input
//                         type="email"
//                         className="grow"
//                         placeholder="Email"
//                       />
//                     </label>

//                     <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
//                       <input
//                         type={showPassword ? "text" : "password"} // Change input type based on showPassword state
//                         className="grow"
//                         placeholder="Password"
//                       />
//                       <button onClick={() => setShowPassword(!showPassword)}>
//                         {" "}
//                         <FontAwesomeIcon
//                           color="#B1B1B1"
//                           icon={showPassword ? faEyeSlash : faEye}
//                         />
//                       </button>
//                     </label>

//                     <label className="input input-bordered flex items-center gap-2 bg-[#F7F8FA] rounded-none">
//                       <input
//                         type="text"
//                         className="grow"
//                         placeholder="Confirm Password"
//                       />
//                     </label>

//                     <button
//                       className="btn rounded-[20px] w-full mt-[1.18rem] bg-[#2F6CE5] text-white text-[14px] font-semibold hover:bg-[#ffff] hover:text-[#2F6CE5] duration-400 ease-in "
//                       onClick={() => {
//                         toast({
//                           title: "Account Created Successfully",
//                           description: "Welcome to the community!",
//                           status: "success",
//                           position: "top",
//                           duration: 5000,
//                           isClosable: false,
//                         });
//                         document.getElementById("my_modal_1").close();
//                       }}
//                     >
//                       Create Account
//                     </button>

//                     <button
//                       className="flex justify-center items-center w-full btn btn-ghost mt-[1.5rem] gap-[10px] text-[14px] font-thin "
//                       style={{
//                         border: "1px solid #D9D9DB",
//                       }}
//                     >
//                       {" "}
//                       <img src="fblogo.png" alt="" /> Sign Up with Facebook
//                     </button>
//                     <button
//                       className="flex justify-center items-center w-full btn btn-ghost gap-[10px] mt-2 text-[14px] font-thin"
//                       style={{
//                         border: "1px solid #D9D9DB",
//                       }}
//                     >
//                       {" "}
//                       <img src="google.png" alt="" /> Sign In with Google
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col mr-[2.25rem] mt-[1.93rem] gap-[1.94rem] left-modal">
//                   <span className="text-[13px] flex justify-end gap-1">
//                     <span className="text-[#3D3D3D]">
//                       Already have an account?
//                     </span>{" "}
//                     <button
//                       onClick={() => {
//                         document.getElementById("my_modal_1").close(); // Close the modal
//                         document.getElementById("my_modal_5").showModal(); // Open the Login modal
//                       }}
//                       className="text-[#2F6CE5]"
//                     >
//                       Sign In
//                     </button>{" "}
//                     <Login />
//                   </span>
//                   <img src="signin.png" alt="" />
//                   <span className="text-[11px] ">
//                     {" "}
//                     By signing up, you agree to our Terms & conditions, Privacy
//                     policy
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </dialog>
//     </section>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useToast } from "@chakra-ui/react";
import Login from "./Login";

const Signup = ({ setIsAuthenticated }) => {
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    toast({
      title: "Unable to Create Account ",
      description: "Signed with Default Account !",
      status: "error",
      position: "top",
      duration: 9000,
      isClosable: false,
    });
    setIsAuthenticated(true); // Set authentication to true
    document.getElementById("my_modal_1").close();
  };

  return (
    <section>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-transparent max-w-5xl shadow-none justify-center flex">
          <div className="modal-action">
            <form method="dialog" className="bg-black">
              <button className="btn btn-sm btn-circle absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="bg-white w-[46rem] h-[35rem] rounded-xl">
              <div className="bg-[#EFFFF4] text-[#008A45] w-[46rem] h-[3.2rem] topMdl text-center m-auto text-[14px] rounded-xl items-center flex justify-center">
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </div>
              <div className="flex gap-3 justify-between text-black">
                <div className="right-modal mt-[1.5rem] ml-[2.25rem] w-[20rem] h-[20rem]">
                  <div className="text-[24px] font-bold">Create Account</div>
                  <div className="mt-[1.5rem] h-[15rem]">
                    <form onSubmit={handleCreateAccount}>
                      <div className="flex w-[20rem]">
                        <label className="input input-bordered flex items-center w-1/2 gap-2 bg-[#F7F8FA] rounded-none">
                          <input
                            type="text"
                            className="grow"
                            placeholder="First Name"
                            required
                          />
                        </label>
                        <label className="input input-bordered flex items-center w-1/2 gap-2 rounded-none bg-[#F7F8FA]">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Last Name"
                            required
                          />
                        </label>
                      </div>
                      <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
                        <input
                          type="email"
                          className="grow"
                          placeholder="Email"
                          required
                        />
                      </label>
                      <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
                        <input
                          type={showPassword ? "text" : "password"}
                          className="grow"
                          placeholder="Password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          <FontAwesomeIcon
                            color="#B1B1B1"
                            icon={showPassword ? faEyeSlash : faEye}
                          />
                        </button>
                      </label>
                      <label className="input input-bordered flex items-center gap-2 bg-[#F7F8FA] rounded-none">
                        <input
                          type="password"
                          className="grow"
                          placeholder="Confirm Password"
                          required
                        />
                      </label>
                      <button
                        type="submit"
                        className="btn rounded-[20px] w-full mt-[1.18rem] bg-[#2F6CE5] text-white text-[14px] font-semibold hover:bg-[#ffff] hover:text-[#2F6CE5] duration-400 ease-in"
                      >
                        Create Account
                      </button>
                    </form>
                    <button
                      className="flex justify-center items-center w-full btn btn-ghost mt-[1.5rem] gap-[10px] text-[14px] font-thin"
                      style={{ border: "1px solid #D9D9DB" }}
                    >
                      <img src="fblogo.png" alt="Facebook logo" /> Sign Up with
                      Facebook
                    </button>
                    <button
                      className="flex justify-center items-center w-full btn btn-ghost gap-[10px] mt-2 text-[14px] font-thin"
                      style={{ border: "1px solid #D9D9DB" }}
                    >
                      <img src="google.png" alt="Google logo" /> Sign In with
                      Google
                    </button>
                  </div>
                </div>
                <div className="flex flex-col mr-[2.25rem] mt-[1.93rem] gap-[1.94rem] left-modal">
                  <span className="text-[13px] flex justify-end gap-1">
                    <span className="text-[#3D3D3D]">
                      Already have an account?
                    </span>
                    <button
                      onClick={() => {
                        document.getElementById("my_modal_1").close(); // Close the modal
                        document.getElementById("my_modal_5").showModal(); // Open the Login modal
                      }}
                      className="text-[#2F6CE5]"
                    >
                      Sign In
                    </button>
                    <Login />
                  </span>
                  <img src="signin.png" alt="Sign in illustration" />
                  <span className="text-[11px]">
                    By signing up, you agree to our Terms & conditions, Privacy
                    policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Signup;
