// import { ReactNode } from 'react';
// import { Toaster } from 'sonner';
//  // or "sonner"
// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';

// export default function RootLayout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="flex bg-blur h-screen "
//       style={{ backgroundImage: "url('/sing_it2.jpg')", 
//         background-size: ;}}>
//         <Sidebar />
//         <div className="flex flex-col flex-1">
//           <Navbar />
//           <main className="p-6">{children}</main>
//         </div>
//         <Toaster /> 
//       </body>
//     </html>
//   );
// }

import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="flex h-screen backdrop-blur-md"
        style={{
          backgroundImage: "url('/sing_it2.jpg')",
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          
          backgroundPosition: 'center',
        }}
      >
        <Sidebar />
        <div className="flex flex-col flex-1 ">
          <Navbar />
          <main className=" p-6">{children}</main>
        </div>
        <Toaster position='top-center' style={{width:"11%"}} />
      </body>
    </html>
  );
}
