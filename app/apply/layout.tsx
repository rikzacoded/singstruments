
// import { ReactNode } from 'react';

// import Navbar from '@/components/Navbar';
// import Sidebar from '@/components/Sidebar';

// export default function InnerLayout({ children }: { children: ReactNode }) {
//   return (
//     <div
//       className="flex h-screen backdrop-blur-xl bg-black/40"
//       style={{
//         backgroundImage: "url('/sing_it2.jpg')",
//         backgroundSize: '100%',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center',
        
//       }}
    
      
//     >
//       <Sidebar />
//       <div className="flex flex-col flex-1">
//         <Navbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }

import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/sing_it2.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Blur + Content Layer */}
      <div className="relative z-10 flex h-full backdrop-blur-sm bg-black/40">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
