// src/server/db/queries.ts

import "server-only";
import { db } from "~/server/db"; // your local drizzle config
import { images } from "~/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
export async function getMyImages() {
  const user = await auth();
  if (!user?.userId) {
    throw new Error("Unauthorized");
  }

  const result = await db
    .select()
    .from(images)
    .where(eq(images.userId, user.userId))
    .orderBy(images.id); // optional: sort by ID

  return result; // inferred as Image[]
}
export async function getImage(id: number) {
  const user = await auth();
  if (!user?.userId) {
    throw new Error("Unauthorized");
  }

  const image = await db.query.images.findFirst({
    where: (img, { eq }) => eq(img.id, id),
  });

  if (!image) throw new Error("Image not found");

  if (image.userId !== user.userId) {
    throw new Error("Unauthorized access to image");
  }

  return image;
}
