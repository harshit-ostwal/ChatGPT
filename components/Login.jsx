"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

function Login() {
  return (
    <div className="grid w-full h-screen md:grid md:grid-cols-2 lg:grid-cols-[60%,40%] leading-none">
      <div className="md:flex flex-col hidden font-NotoSans md:p-5 lg:p-10 bg-[#00002E] text-[#D292FF]">
        <h1 className="text-[1.2vw] font-bold">ChatGPT●</h1>
        <div className="flex flex-col justify-center h-full gap-3">
          <h1 className="text-[2.5vw] font-bold">Plan a trip</h1>
          <h2 className="text-[1.7vw] font-medium">to see the northern lights in norway</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-5 bg-black font-NotoSans">
        <h2 className="text-3xl font-semibold text-white">Get started</h2>
        <div className="flex gap-3">
          <button onClick={() => signIn("google")} className="rounded-md px-20 py-4 transition-all duration-300 font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
            Log in
          </button>
          <button className="rounded-md px-20 py-4 transition-all duration-300 font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login