import React from "react";
import PropTypes from "prop-types";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import Auth from "layouts/Auth.js";

export default function BestThreadsCardTable({ color }) {
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-gray-800 text-white")
        }
      >
        
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-gray-800" : "text-white")
                }
              >
                List of Best Twitter Threads 
              </h3>
            </div>
          </div>
        </div>

        <div className="block w-full overflow-x-auto">
          
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                
                
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Summary
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Category
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Retweets
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Author
                </th>
                <th  
                  className={
                    "px-1 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-gray-100 text-gray-600 border-gray-200"
                      : "bg-gray-700 text-gray-300 border-gray-600")
                  }
                >
                  Thread
                </th>
              </tr>
            </thead>
            <tbody>
              
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">

                  <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                   Here's a guide on how to move from mid-level developer to senior engineer in 2021
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Programming | Career Development 
                  <br></br>Mentoring
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  337
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
            
                  <a href="https://twitter.com/bahdcoder" target="new" className="font-bold text-gray-800 mt-8">
                    @bahdcoder
                  </a>
                 
                  
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  
                  <a href="https://twitter.com/bahdcoder/status/1348904248956907520" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
               
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s p-4 text-left flex items-center">
           
                  <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    What actually is a good software project to showcase your abilities for potential employers?
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Recruitment | Hiring 
                  <br></br>Portfolio
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                   23
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                     <a href="https://twitter.com/oliverjumpertz" target="new" className="font-bold text-gray-800 mt-8">
                      @oliverjumpertz
                    </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                
                  <a href="https://twitter.com/oliverjumpertz/status/1348988947146354690" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                 
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">
             
                  <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    10 fundamental practices that will improve your career in tech
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Career Development
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  228
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  

                  <a href="https://twitter.com/svpino/status/1348589773548638209" target="new" className="font-bold text-gray-800 mt-8">
                    @svpino
                  </a>
                   
                 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
             
                  <a href="https://twitter.com/svpino/status/1348589773548638209" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s  p-4 text-left flex items-center">
           
                  <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Harry Singh grew up in a village in India.Today, he is a Billionaire who is living the dream in the U.S. 
                    owning boring businesses like Gas Stations.
      
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Entrepreneurship
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                
                  37
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    <a href="https://twitter.com/RohunJauhar/status/1348662194142113795" target="new" className="font-bold text-gray-800 mt-8">
                    @RohunJauhar
                    </a> 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                
                  <a href="https://twitter.com/RohunJauhar/status/1348662194142113795" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">
              
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Post pandemic, it is time to relook at the digital opportunity in India.<br></br>
                    We are on the cusp of a once-in-a-lifetime transformation of our Nation.<br></br>
                    A thread from my conversation with @NandanNilekani on @FoundingF
 
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Economy | Digital India
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  190
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <a href="https://twitter.com/hchawlah/" target="new" className="font-bold text-gray-800 mt-8">
                    @hchawlah
                  </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                
                  <a href="https://twitter.com/hchawlah/status/1348263686138257412" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                  
                </td>
              
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s p-4 text-left flex items-center">
              
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    I was at Amzn in 2000 when the internet bubble popped.
                    Capital markets dried up & we were burning $1B/yr. Our biggest expense was datacenter -> expensive Sun servers. 
                    We spent a year ripping out Sun & replacing with HP/Linux, which formed the foundation for AWS.
                    The backstory:
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Amazon | AWS
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                9200
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <a href="https://twitter.com/DanRose999/" target="new" className="font-bold text-gray-800 mt-8">
                    @DanRose999
                  </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
             
                  <a href="https://twitter.com/DanRose999/status/1347677573900242944" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                
                </td>
              
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s p-4 text-left flex items-center">
              
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Speed of execution is the moat inside which live all other moats.
                    Speed is your best strategy. Speed is your strongest weapon.
                    Speed has THE highest correlation to mammoth outcomes. 
                    Those who conflate speed w/ 'thoughtlessness' haven't seen world class execution @ speed
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Entrepreneurship | Startups
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  285
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                   <a href="https://twitter.com/MohapatraHemant" target="new" className="font-bold text-gray-800 mt-8">
                    @MohapatraHemant
                   </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  
                  <a href="https://twitter.com/MohapatraHemant/status/1346858624920875009" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                
                </td>
               
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">
           
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Concise writing is hard.Because *tactics* aren't enough. 
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Writing Tips
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  126
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <a href="https://twitter.com/shreyas" target="new" className="font-bold text-gray-800 mt-8">
                    @shreyas
                  </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                
                  <a href="https://twitter.com/shreyas/status/1349090912891150337" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                  
                </td>
             
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">
              
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Why do smart product people & teams often build products with mediocre or no impact?
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Leadership | Innovation
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 1100
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                <a href="https://twitter.com/shreyas" target="new" className="font-bold text-gray-800 mt-8">
                    @shreyas
                  </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 
                  <a href="https://twitter.com/shreyas/status/1282169204699873281" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
              
                </td>
               
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s p-4 text-left flex items-center">
             
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    There are Good Product Managers and there are Great Product Managers.
                    There are also Okay Product Managers and Bad Product Managers,
                    but we will focus on the Good and the Great here. 
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Product Managers
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  1500
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <a href="https://twitter.com/shreyas" target="new" className="font-bold text-gray-800 mt-8">
                    @shreyas
                  </a> 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 
                  <a href="https://twitter.com/shreyas/status/1249039638829793280" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                
                </td>

              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-no-wrap p-4 text-left flex items-center">
            
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                    Let’s talk about High Agency: <br></br>
                    an attitude I’ve seen in every successful product manager & leader I’ve known
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Product Manager | Leadership
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  1300
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <a href="https://twitter.com/shreyas" target="new" className="font-bold text-gray-800 mt-8">
                    @shreyas
                  </a> 
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                 
                  <a href="https://twitter.com/shreyas/status/1276956836856393728" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                 
                </td>
            
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s p-4 text-left flex items-center">
             
                <span
                    className={
                      "ml-3 font-light " +
                      +(color === "light" ? "text-gray-700" : "text-white")
                    }
                  >
                   Swedish engineer at Volvo patented what would become one of the greatest inventions of all time
                   Volvo stood to make billions.But after a meeting with Volvo's President, he decided to give it away for 
                   free - and it changed the world
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  Automobiles | Leadership
                  <br></br> Volvo
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  807
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                  <a href="https://twitter.com/ankithharathi" target="new" className="font-bold text-gray-800 mt-8">
                    @ankithharathi
                  </a>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
               
                  <a href="https://twitter.com/ankithharathi/status/1348795522547650560" target="new" className="font-bold text-gray-800 mt-8">
                    View
                  </a>
                 
                </td>
              
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

BestThreadsCardTable.defaultProps = {
  color: "light",
};

BestThreadsCardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
