// // import Span from "next/dist/trace";
// import Image from "next/image";
// import Link from "next/link";
// import Menu from "@/components/Menu";
// import Navbar from "@/components/Navbar";
// import AdminPage from "./admin/page";

// export default function RootLayout({
//     children,
//   }: Readonly<{
//     children: React.ReactNode;
//   }>) {
//     return (
//        <div className="h-screen flex">
//         {/* LEFT */}
//         <div className="w-1/6 md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
//         <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
//         <Image src="/logo.png" alt="logo" width={32} height={32} />
//         <span className='hidden lg:block font-bold'>ClassUnity</span>
//         </Link>
//         <Menu />
//         </div>
        
//         {/* RIGHT */}
//         <div className="w-5/6 md:w-[92%] lg:w-[84%] xl:w-[86%] h-full bg-[#F7F8FA]">
        
//         <Navbar />
//         <AdminPage/>
        
//         </div>

//        </div>
//     );
//   }

//This template works perfect!
import Menu from "@/src/components/Menu";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen w-full flex overflow-hidden">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/cpu-logo.jpg" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">Class Unity</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-hidden flex flex-col">
        <Navbar />
        {/* <div className="flex-grow overflow-auto"> */}
          {children}
        {/* </div> */}
      </div>
    </div>
  );
}
