import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <section>
      <dialog id="my_modal_1" className="modal ">
        <div className="modal-box bg-transparent max-w-5xl shadow-none justify-center flex">
          <div className="modal-action">
            <form method="dialog" className="bg-black">
              <button className="btn btn-sm btn-circle  absolute  right-2 top-2">
                ✕
              </button>
            </form>
            <div className="bg-white w-[46rem] h-[28.6rem] rounded-xl">
              <div className="bg-[#EFFFF4]  text-[#008A45] w-[46rem] h-[3.2rem] topMdl text-center m-auto text-[14px] rounded-xl items-center flex justify-center">
                {" "}
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </div>
              <div className="flex gap-3 justify-between text-black">
                <div className="right-modal mt-[1.5rem] ml-[2.25rem] w-[20rem] h-[20rem]">
                  <div className="text-[24px] font-bold"> Sign In </div>
                  <div className="mt-[1.5rem] ">
                    <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
                      <input type="text" className="grow" placeholder="Email" />
                    </label>

                    <label className="input input-bordered rounded-none flex items-center gap-2 bg-[#F7F8FA]">
                      <input
                        type={showPassword ? "text" : "password"} // Change input type based on showPassword state
                        className="grow"
                        placeholder="Password"
                      />
                      <button onClick={() => setShowPassword(!showPassword)}>
                        {" "}
                        <FontAwesomeIcon
                          color="#B1B1B1"
                          icon={showPassword ? faEyeSlash : faEye}
                        />
                      </button>
                    </label>

                    <button className="btn rounded-[20px] w-full mt-[1.18rem] bg-[#2F6CE5] text-white text-[14px] font-semibold hover:bg-[#ffff] hover:text-[#2F6CE5] duration-400 ease-in ">
                      Sign In
                    </button>

                    <button
                      className="flex justify-center items-center w-full btn btn-ghost mt-[1.5rem] gap-[10px] text-[14px] font-thin "
                      style={{
                        border: "1px solid #D9D9DB",
                      }}
                    >
                      {" "}
                      <img src="fblogo.png" alt="" /> Sign In with Facebook
                    </button>
                    <button
                      className="flex justify-center items-center w-full btn btn-ghost gap-[10px] mt-2 text-[14px] font-thin"
                      style={{
                        border: "1px solid #D9D9DB",
                      }}
                    >
                      {" "}
                      <img src="google.png" alt="" /> Sign In with Google
                    </button>
                  </div>
                </div>
                <div className="flex flex-col mr-[2.25rem] mt-[1.93rem] gap-[1.94rem] left-modal">
                  <span className="text-[13px] text-center">
                    <span className="text-[#3D3D3D]">
                      Don’t have an account yet?
                    </span>{" "}
                    <span className="text-[#2F6CE5]">Create new for free!</span>{" "}
                  </span>
                  <img src="signin.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Login;
