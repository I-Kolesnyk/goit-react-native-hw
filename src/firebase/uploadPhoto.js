import "react-native-get-random-values";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./config";

export const uploadPhoto = async (image, folder) => {
  const id = Date.now().toString();  
  const avatar = await fetch(image);
  const blobPhoto = await avatar.blob();
  const imageRef = ref(storage, `${folder}/${id}`);

  await uploadBytesResumable(imageRef, blobPhoto);
  const url = await getDownloadURL(imageRef);

  return url;
};