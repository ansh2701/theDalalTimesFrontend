import { getStrapiMedia } from "../lib/media";
import Image from "next/image";

const StImage = ({ image, style }) => {
  const { url, alternativeText } = image;
  console.log(url);
  const loader = () => {
    return getStrapiMedia(image);
  };
  console.log(getStrapiMedia(image));

  return (
    <Image
      loader={loader}
      layout="responsive"
      width={image.width}
      height={image.height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
      className={style}
    />
  );
};

export default StImage;
