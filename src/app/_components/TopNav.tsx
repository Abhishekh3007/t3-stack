"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
//import { UploadButton } from "@uploadthing/react";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";

export default function TopNav() {
  const router = useRouter();
  return (
    <nav className=" flex items-center justify-between p-4  text-white font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}