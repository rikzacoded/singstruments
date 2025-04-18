
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function InnerLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex h-screen backdrop-blur-md"
      style={{
        backgroundImage: "url('/sing_it2.jpg')",
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
       
      }}
    >
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-6">{children}</main>
      </div>
    
    </div>
  );
}
