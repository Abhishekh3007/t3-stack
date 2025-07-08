"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
  const router = useRouter();

  return (
    <nav className="backdrop-blur-sm bg-black/60 border-b border-zinc-800 p-4 px-6 shadow-md flex items-center justify-between text-white">
      {/* Left logo/title */}
      <div
        className="text-2xl font-bold tracking-tight cursor-pointer hover:text-purple-400 transition-colors"
        onClick={() => router.push("/")}
      >
        📸 T3 Gallery
      </div>

      {/* Right side buttons */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className="px-4 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 border border-zinc-600 transition-colors text-sm font-medium">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <SimpleUploadButton />
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
