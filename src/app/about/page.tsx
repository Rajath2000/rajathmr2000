'use client';
import React, { Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from "../loading";
import { ErrorBoundary } from 'next/dist/client/components/error-boundary';
export default function page() {
  const [data,setData] = useState("");



  useEffect(()=>{
    async function call(){
        let response:any = await axios.get("https://jsonplaceholder.typicode.com/posts");
         setData(response.data);
    }
   call()
  },[]);

  return (
    <>
    { 
        data && data.length > 0 ?
            <div>{data}</div> : <Loading/>
    }
    </>
  )
}
