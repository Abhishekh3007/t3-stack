import { db } from "~/server/db";
// import { images } from "~/server/db/schema";
import { images } from "~/server/db/schema";
import { SignedIn, SignedOut } from "@clerk/nextjs";
export const dynamic="force-dynamic" ;// Force dynamic rendering for this page

async function image() {
  const image = await db.select().from(images);
  return(
      <div className="flex flex-wrap">
        
        {image.map((img) => (
          <div key={img.id} className="flex flex-col w-40 p-2">
            <img src={img.url} alt={`Image ${img.id}`} />
            <div className="text-center text-sm mt-2">{img.name}</div>
          </div>
        ))}
      </div>
  )
};

export default async function HomePage() {

  // console.log(postsList);
  return (
    <main className="">
      <SignedOut>
        < div className="w-full h-full text-2xl text-center" >Please sign-In Above</div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to the Gallery</h1>
          <p className="text-lg mb-6">Here are some images:</p>
          {await image()}
        </div>
      </SignedIn>
    
    </main>
  );
}