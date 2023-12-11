// import { UserButton } from "@clerk/nextjs";
import { SignIn } from "@clerk/nextjs";
 
export default function Home() {
  return (
    <div>
      {/* <UserButton afterSignOutUrl="/"/> */}
      <SignIn />
    </div>
  )
}