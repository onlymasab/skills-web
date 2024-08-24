import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center p-4 bg-slate-100">
      {/* <MobileSidebar/> */}
      <div className="flex w-full justify-center space-x-6">
         
      <Link href={'/form'}>
        Home
        </Link>
        <Link href={'/lectures'}>
        Lectures
        </Link>
        <Link href={'/taskform'}>
        Task Submit
        </Link>
        <Link href={'/contact'}>
        Contact
        </Link>
        <Link href={'/admin'}>
        Admin Penal
        </Link>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;