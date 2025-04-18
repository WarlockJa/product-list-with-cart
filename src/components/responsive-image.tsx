export default function ResponsiveImage({
  desktop,
  mobile,
  tablet,
  thumbnail,
  alt,
  className,
}: ProductImage & { alt: string; className?: string }) {
  return (
    <picture>
      <source media="(max-width: 100px)" srcSet={thumbnail} />
      <source
        media="(min-width: 101px) and (max-width: 375px)"
        srcSet={mobile}
      />
      <source
        media="(min-width:376px) and (max-width: 1024px)"
        srcSet={tablet}
      />
      <img src={desktop} alt={alt} className={className} />
    </picture>
  );
}
