// albums.ts
import type { ImageMetadata } from 'astro';

export async function getAlbumImages(albumId: string, imagesFolder?: string) {
  if (!imagesFolder) return [];

  const images = import.meta.glob<{ default: ImageMetadata }>(
    `../assets/images/gallery/${imagesFolder}/*.{jpeg,jpg,png,webp,avif}`,
    { eager: true }
  );

  console.log('11111111')
  console.log('11111111')
  console.log('11111111')
  console.log('11111111')
  console.log(images)

  return Object.values(images).map((image) => ({
    src: image.default.src,
    alt: `Image from ${albumId} album`,
    width: image.default.width,
    height: image.default.height
  }));
}
