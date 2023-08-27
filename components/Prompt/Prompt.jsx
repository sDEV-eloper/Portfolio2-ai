"use client"
import React, { useState } from "react";
import axios from "axios";
import MyImage from "@/public/images/myimg.png";
import Image from "next/image";
import Loader from "../Loader/Loader";
import { Card, Layout } from "@shopify/polaris";

const Prompt = () => {
  const [inputText, setInputText] = useState("");
  const [responseData, setResponseData] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://127.0.0.1:8080/api/home", {
        inputData: inputText,
      });
      console.log(response.data);
      setResponseData(response.data.inputData);
    } catch (error) {
      console.error("Error sending data to Python:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="md:w-[70%] sm:w-full sm:px-12">
      <p className="text-lg font-bold mb-4">Ask me anything!</p>
      
<form onSubmit={handleSubmit} >   
  
    <div class="relative">
        <input 
        t type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="What are your skills"
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 "  />

        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-tl from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 ">Tell Me</button>

    </div>
</form>



      {loading ? (
        <Loader />
      ) : responseData ? (
      
        <div className="mt-4 bg-gradient-to-tl from-blue-400 to-purple-400 rounded-lg p-2 w-full">
          <div className="flex flex-col sm:flex-row  gap-2">
            <Image
              src={MyImage}
              alt="suraj"
              className="shadow-md shadow-gray-600 w-12 h-10 rounded-full bg-[#d9dc30] mb-2 sm:mb-0"
            />
            <p className="text-left bg-white p-2 rounded-lg text-sm ">
              {responseData}
            </p>
          </div>
        </div>
      ) : null}
    </div>
    </>
  );
};

export default Prompt;
