
import { getImage } from "~/server/db/queries";
export default async  function PhotoModal({
  params:{ id: photoId},
}: {
  params: { id: string };
}) {
    const idasnum=Number(photoId)
    if (isNaN(idasnum)) {
      throw new Error("Invalid image ID");
    }
    const image = await getImage(idasnum);
  return <div >
    <img src={image.url} className="h"/>
   
  </div>;
}
