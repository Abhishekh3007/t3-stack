import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function TopNav() {
  return (
    <nav className=" flex items-center justify-between p-4  text-white font-semibold">
      <div>Gallery</div>
       <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
       </div>
      
    </nav>
  );
}