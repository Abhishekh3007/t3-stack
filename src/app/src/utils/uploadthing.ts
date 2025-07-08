import {
  generateReactHelpers,
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

// Update the import path below to the correct relative path if needed
import type { OurFileRouter } from "../../api/uploadthing/core";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const {useUploadThing} = generateReactHelpers<OurFileRouter>();
