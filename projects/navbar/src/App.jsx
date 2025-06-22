// import { useState, useEffect } from "react";
// import { contents } from "./Components/Content";
// import { motion } from "framer-motion";

// function App() {
//   const [timeOfLastClick, setTimeOfLastClick] = useState(0);
//   const [activeSection, setActiveSection] = useState("html");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;

//       contents.forEach((content) => {
//         const section = document.getElementById(content.id);
//         if (section) {
//           const offsetTop = section.offsetTop - 80;
//           const offsetBottom = offsetTop + section.offsetHeight;

//           if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
//             setActiveSection(content.id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="bg-[#0d0d0d] text-gray-200 min-h-screen">
//       {/* Navigation */}
//       <nav className="nav-bar fixed top-0 left-0 w-full bg-[#121212] shadow-lg z-50 flex items-center justify-center">
//         <ul className="flex justify-center items-center gap-6 text-lg font-semibold">
//           {contents.map((content) => (
//             <li key={content.id} className="relative">
//               <a
//                 href={`#${content.id}`}
//                 onClick={() => {
//                   setActiveSection(content.id);
//                   setTimeOfLastClick(Date.now());
//                 }}
//                 className="relative px-5 py-2 transition-all duration-300 hover:text-gray-300"
//               >
//                 {content.heading}

//                 {/* Active Indicator */}
//                 {activeSection === content.id && (
//                   <motion.div
//                     layoutId="bubble"
//                     className="absolute left-0 right-0 top-0 bottom-0 -z-10 bg-[#3700b3] rounded-lg"
//                     transition={{ type: "spring", duration: 0.6 }}
//                   />
//                 )}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Sections */}
//       <main className="pt-24 px-6 space-y-14">
//         {" "}
//         {/* Increased pt-24 to move content below navbar */}
//         {contents.map((content) => (
//           <section
//             id={content.id}
//             key={content.id}
//             className="content max-w-3xl mx-auto p-6"
//             // className="content max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2a2a2a]"
//           >
//             <h2 className="text-2xl font-bold text-gray-100">
//               {content.heading}
//             </h2>
//             <p className="text-gray-400 leading-relaxed mt-2">
//               {content.paragraph}
//             </p>
//           </section>
//         ))}
//       </main>
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { contents } from "./Components/Content";
import { motion } from "framer-motion";

function App() {
  const [activeSection, setActiveSection] = useState("html");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      contents.forEach((content) => {
        const section = document.getElementById(content.id);
        if (section) {
          const offsetTop = section.offsetTop - 70; // Offset to avoid navbar covering content
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(content.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-gray-200 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full h-16 bg-[#121212] shadow-lg z-50 flex items-center justify-center">
        <ul className="flex justify-center items-center gap-6 text-lg font-semibold">
          {contents.map((content) => (
            <li key={content.id} className="relative">
              <a
                href={`#${content.id}`}
                className={`relative px-5 py-2 transition-all duration-300 ${
                  activeSection === content.id
                    ? "text-[#fefefe]"
                    : "hover:text-gray-300"
                }`}
              >
                {content.heading}

                {/* Active Indicator */}
                {activeSection === content.id && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 -z-10 bg-[#3700b3] rounded-lg"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sections */}
      <main className="pt-[70px] px-6 space-y-14">
        {contents.map((content) => (
          <section
            id={content.id}
            key={content.id}
            className="content max-w-3xl mx-auto bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-[#2a2a2a] mt-[65px] scroll-mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-100 text-[min(10vw, 70px)]">
              {content.heading}
            </h2>
            <p className="text-gray-400 leading-relaxed mt-2">
              {content.paragraph}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;
