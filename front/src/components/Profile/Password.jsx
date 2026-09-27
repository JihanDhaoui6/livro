import { useState } from "react";
import styles from "../../styles/style";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import pass from '../../assets/homepage/blanc.jpg'
import Header from "../Layout/Header";
const Password = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const passwordChangeHandler = async (e) => {
    e.preventDefault();

    await axios
      .put(
        `${server}/user/update-user-password`,
        { oldPassword, newPassword, confirmPassword },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success(res.data.success);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };
  
  return (
    <div>
        <Header/>
    <div className="w-[30%] mx-auto p-6 border border-[#f1582e] rounded-md mt-24">
        
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-4">
        Change Password
        {/* <img src={pass} alt="" className="w-[30px] h-[30px] items-center justify-center"/> */}
      </h1>
      <form onSubmit={passwordChangeHandler} className="space-y-4">
        <div>
          <label className="block mb-1">Your Old password</label>
          <input
            type="password"
            className={`${styles.input} w-full`}
            required
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <br />
        
        <div>
          <label className="block mb-1">Your New password</label>
          <input
            type="password"
            className={`${styles.input} w-full`}
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label className="block mb-1">Confirm password</label>
          <input
            type="password"
            className={`${styles.input} w-full`}
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <br />
        <button
          className="w-full py-2 px-4 bg-[#f43f23] text-white rounded-md transition duration-300 hover:bg-blue-600"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
    </div>
  );
};

export default Password;
