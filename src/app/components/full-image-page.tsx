import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/db/queries";
import Image from "next/image";

export default async function FullPageImageView(props:{id:number}) {
  try {
    const image = await getImage(props.id);

    const client = await clerkClient();
    const uploaderInfo = await client.users.getUser(image.userId);
    return (
        <div className="flex h-full w-full min-w-0 bg-zinc-900/50 text-white">
        <div className="flex-shrink flex justify-center items-center">
        <Image 
          src={image.url} 
          alt={image.name} 
          width={800}
          height={600}
          className="object-contain"
          style={{width: 'auto', height: 'auto'}}
        />
        </div>
        <div className="flex w-48 flex-shrink-0 flex-col gap-2 border-l">
            <div className="border-b text-center text-lg p-2">{image.name}</div>

            <div className="flex flex-col px-2"><span>Uploaded By:</span> <span>{uploaderInfo.fullName}</span></div>
            <div className="flex flex-col px-2"><span>Created On:</span> <span>{new Date(image.createdAt).toLocaleDateString()}</span></div>
        </div>
        </div>
    );
  } catch (error) {
    return (
      <div className="p-4 text-grey-500">
        Error loading image: {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }
}