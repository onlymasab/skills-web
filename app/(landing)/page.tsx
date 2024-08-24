import { Button } from "@/components/ui/button"
import Link from "next/link";
let HomePage = ()=> {
  return (
    <div className="mt-12">
      <h1 className="text-center mt-6 text-2xl font-extrabold">Assignment Submission Form</h1>
      
    <div className="flex justify-center p-6">
      <Link href="sign-in" className="px-4">
        <Button>Sign in</Button>
      </Link>

      <Link href="sign-up" className="px-4">
        <Button>Sign up</Button>
      </Link>
     
    </div>
    </div>
  );
}

export default HomePage;