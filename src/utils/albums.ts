import type { ImageMetadata } from 'astro';

export async function getAlbumImages(albumId: string, imagesFolder?: string) {
  if (!imagesFolder) return [];
  
  // 1. List all images from the specified folder
  const images = import.meta.glob<{ default: ImageMetadata }>(
    `/src/content/${imagesFolder}/**/*.{jpeg,jpg,png,webp,avif}`
  );

  // 2. Resolve the image promises
  const resolvedImages = await Promise.all(
    Object.values(images).map((image) => image().then((mod) => mod.default))
  );

  // 3. Return images with their metadata
  return resolvedImages.map((image) => ({
    src: image,
    alt: `Image from album ${albumId}`,
    width: image.width,
    height: image.height,
  }));
}