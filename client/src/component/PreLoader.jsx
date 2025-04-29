import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./PreLoader.css";
// import "./assets/logo.png"

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Connecting</span>
        <span>Campus</span>
      </div>
    </div>
  );
};

export default PreLoader;

// import React from 'react';
// import './preLoader.css';

// function Loader() {
//   const text = "Campus Connect";
//   // Split text into letters; include spaces as spans for consistent animation timing
//   const letters = text.split("").map((char, index) => (
//     <span
//       key={index}
//       className="char"
//       style={{ animationDelay: `${index * 0.1}s` }}
//     >
//       {char}
//     </span>
//   ));

//   return (
//     <div className="loader-container">
//       <h1 className="campus-connect">
//         {letters}
//       </h1>
//       <h2 className="loading-text">Loading...</h2>
//     </div>
//   );
// }

// export default Loader;
