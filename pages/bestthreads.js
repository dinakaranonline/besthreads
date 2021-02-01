import React from "react";

// components

import BestThreadsCardTable from "components/Cards/BestThreadsCardTable.js";
import IndexNavbar from "components/Navbars/BestThreadsNavBar.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function BestThreads() {
  return (
    <>
         <IndexNavbar fixed /> 
         <br>
         </br>
         <br>
         </br>
         <br>
         </br>   
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <BestThreadsCardTable />
            </div>
          </div>
    </>
  );
}

