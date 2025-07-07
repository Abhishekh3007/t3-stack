import "server-only";
import { db } from "./index";
import { images } from "~/server/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";

export async function getMyImages() {
  const user = await currentUser();
  if (!user?.id)
 {
    console.log("Unauthorized");
    return [];
  }

  const image = await db
    .select()
    .from(images)
    .where(eq(images.userId, user.id));

  return image;
}
export async function getImage(id:number){
  const user=auth();
   if (!(await user).userId)
 {
    console.log("Unauthorized");
    return [];
  }
  const image = await db.query.images.findFirst({ 
    where: (model) => eq(model.id, id)
  });
  if (!image) {
    throw new Error("Image not found");
  }
  return image;
}