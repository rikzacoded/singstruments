// export default function Sidebar() {
//     return (
//       <aside className="w-60 bg-fuchsia-950 p-4 h-full  text-white">
//         <h1 className="text-white text-2xl font-bold">singstruments</h1>
//         <ul className="mt-12 ">
//           {/* <li className="mb-2">Dashboard</li>
//           <li className="mb-2">Form Page</li> */}
//           <li><button className="hover:text-neutral-600 border   ">Home</button></li>
//           <li><button className="hover:text-neutral-600 border ">Events</button></li>
//           <li><button className="hover:text-neutral-600 border ">About Us</button></li>
//           <li><button className="hover:text-neutral-600 border ">Learn More</button></li>
//         </ul>
//       </aside>
//     );
//   }

import SidebarButton from "./sidebarButtons";
export default function Sidebar() {
    return (
        
      <aside className="w-60   p-4 h-full text-white" style={{backgroundColor:"#210426"}}>
        <div >
        <h1 className="text-white mt-2 text-2xl font-bold">singstruments</h1>
        </div>
        <SidebarButton/>
       
      </aside>
    
       
    );
  }
  
  