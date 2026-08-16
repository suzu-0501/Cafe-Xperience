import type { CSSProperties, ImgHTMLAttributes } from "react";

type StaticImageSource = string | { src: string };

type ImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: StaticImageSource;
  fill?: boolean;
  priority?: boolean;
};

function withPagesBase(src: StaticImageSource) {
  const value = typeof src === "string" ? src : src.src;
  return value.startsWith("/")
    ? `${import.meta.env.BASE_URL}${value.slice(1)}`
    : value;
}

export default function Image({
  src,
  fill = false,
  priority = false,
  alt = "",
  style,
  loading,
  ...props
}: ImageProps) {
  const fillStyle: CSSProperties | undefined = fill
    ? {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        ...style,
      }
    : style;

  return (
    // The static Pages adapter preserves the authored image attributes and URLs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...props}
      alt={alt}
      src={withPagesBase(src)}
      style={fillStyle}
      loading={priority ? "eager" : loading}
      fetchPriority={priority ? "high" : undefined}
    />
  );
}
