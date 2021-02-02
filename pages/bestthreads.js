import React from "react";

// components

import BestThreadsCardTable from "components/Cards/BestThreadsCardTable.js";
import IndexNavbar from "components/Navbars/BestThreadsNavBar.js";
import Navbar from "components/Navbars/BestThreadsNavbar.js";

// layout for page

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Footer from "components/Footers/FooterSmall.js";

export default function BestThreads() {
  return (
    <>
           <Navbar/>
         <main>
         <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-50">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover "
            style={{
              backgroundImage:
                "url('https://arghya.xyz/images/posts/threads/ogqcorp.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=160')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto ">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                   Best Twitter Threads and Where to find them ? 
                  
                 
                  </h1>
                </div>
              </div>
            </div>
          </div>
 
        </div>
          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="w-full mb-12 px-4">
              <BestThreadsCardTable />
            </div>
          </div>
          </main>
         
    </>
  );
}
