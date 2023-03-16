import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  useController,
} from "yet-another-react-lightbox/core";

export default function NextJsImage(...[image, , rect]) {
  const { getLightboxProps } = useController();
  const cover =
    isImageSlide(image) &&
    isImageFitCover(image, getLightboxProps().carousel.imageFit);

  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / image.height) * image.width)
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / image.width) * image.height)
      )
    : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image}
        loading="eager"
        placeholder="blur"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}