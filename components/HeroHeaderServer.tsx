import HeroHeader from '@/components/HeroHeader';
import { desktopBentoSlots } from '@/content/bento-slots';
import { headerPhotoPool } from '@/content/header-photos';
import { siteConfig } from '@/content/site.config';
import { assignHeroPhotos, dailyBentoSeed } from '@/lib/bento-assign';

/** Prefer this group shot in the large bottom-center desktop slot. */
const FEATURED_GROUP_SRC = '/images/events/cursor-danang-nick-miller/36.webp';

export default function HeroHeaderServer() {
	const seed = dailyBentoSeed(siteConfig.communityName);
	const photos = assignHeroPhotos(headerPhotoPool, desktopBentoSlots, seed);

	const featured = headerPhotoPool.find((photo) => photo.src === FEATURED_GROUP_SRC);
	if (featured) {
		const midIndex = photos.desktop.findIndex((photo) => photo.row === 3 && photo.col === 2);
		const featuredIndex = photos.desktop.findIndex((photo) => photo.src === FEATURED_GROUP_SRC);
		if (midIndex >= 0) {
			if (featuredIndex >= 0 && featuredIndex !== midIndex) {
				const swapped = photos.desktop[midIndex];
				photos.desktop[midIndex] = { ...photos.desktop[midIndex], src: featured.src, alt: featured.alt };
				photos.desktop[featuredIndex] = { ...photos.desktop[featuredIndex], src: swapped.src, alt: swapped.alt };
			} else if (featuredIndex < 0) {
				photos.desktop[midIndex] = { ...photos.desktop[midIndex], src: featured.src, alt: featured.alt };
			}
		}
	}

	return <HeroHeader photos={photos} />;
}
