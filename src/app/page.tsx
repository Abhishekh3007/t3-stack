import { db } from "~/server/db";
// import { images } from "~/server/db/schema";
import { images } from "~/server/db/schema";
export const dynamic="force-dynamic" ;// Force dynamic rendering for this page



export default async function HomePage() {
  const image = await db.select().from(images);
  // console.log(postsList);
  return (
    <main className="">
      <div className="flex flex-wrap">
        
        {[...image, ...image, ...image].map((img) => (
          <div key={img.id} className="flex flex-col w-40 p-0">
            <img src={img.url} alt={`Image ${img.id}`} />
            <div className="text-center text-sm mt-2">{img.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}