import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
  return (
    <div className="flex items-center justify-between p-4 text-white text-xl font-semibold border-b">
      <div>Gallery</div>
       <div>
        <SignedOut>
            <SignInButton/>
        </SignedOut>
        <SignedIn>
            <UserButton/>
        </SignedIn>
       </div>
      
    </div>
  );
}