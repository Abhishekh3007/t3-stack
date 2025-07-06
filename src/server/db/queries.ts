import "server-only";
import { db } from "./index";
import { images } from "~/server/db/schema";
import { currentUser } from "@clerk/nextjs/server";
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
