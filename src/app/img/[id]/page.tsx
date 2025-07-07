import { getImage } from "~/server/db/queries";
import FullPageImageView from "~/app/components/full-image-page";


export default async function PhotoModal({
    params:{id:photoId},
}:{
    params:{id:string};
}) {
    const idAsNumber = Number(photoId);
    if (isNaN(idAsNumber)) throw new Error("Invalid photo ID"); 
    
    const image = await getImage(idAsNumber);
    return(
        <FullPageImageView id={idAsNumber} />

    )
     //<div>{photoId}</div>;
}