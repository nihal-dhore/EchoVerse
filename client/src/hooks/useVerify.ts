import { useEffect, useState } from "react";
import axios from "axios";

import {  useLocation, useNavigate } from "react-router-dom";

export const useVerify = () => {
  const navigate = useNavigate();
  const [verification, setVerification] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const verify = async () => {
      try {
        await axios.get(`${process.env.BACKEND_URL}/api/v1/user/verify`, {
          headers: {
            Authorization: localStorage.getItem("authToken")
          }
        })
        setVerification(true);
      } catch (error) {
        console.log(error);
        if (location.pathname === "/write-in-verse") {
          navigate("/")
        }
      }
    }
    verify();

    return () => {
      setVerification(false);
    }
  }, [location.pathname, navigate]);



  return {
    verification, setVerification
  }
}