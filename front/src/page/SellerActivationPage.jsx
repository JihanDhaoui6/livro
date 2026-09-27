import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const SellerActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(false);
   
  useEffect(() => {
    const sendActivationRequest = async () => {
      try {
        if (activation_token) {
          const res = await axios.post(`${server}/librarie/activation`, {
            activation_token,
          });
          console.log(res);
        }
      } catch (err) {
        setError(true);
      }
    };

    sendActivationRequest();
  }, []); 
//activation_token
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your account has been created suceessfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;