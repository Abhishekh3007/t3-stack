// src/server/db/queries.ts

import "server-only";
import { auth } from "@clerk/nextjs/server";
import { db } from "~/server/db"; // adjust to your actual DB instance
import { images } from "~/server/db/schema"; // your Drizzle table schema
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import analyticsServerClient from "./analytics" // adjust path
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
export  async function deleteImage(id: number) {
  const user= await auth();
  if (!user?.userId) {
    throw new Error("Unauthorized");
  }
  await db.delete(images).where(
    and(eq(images.id, id), eq(images.userId, user.userId))
  );
    analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete image",
    properties: {
      imageId: id,
    },
  });
  
  redirect("/");
}