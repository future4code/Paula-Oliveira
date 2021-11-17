import React from "react";
import axios from "axios";
import {BASE_URL} from "../constants/urls"


 export const posts = () => {
    axios.get(`${BASE_URL}/posts`)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
 
        })
        .catch((err) => alert(err.response.data.message))
  }