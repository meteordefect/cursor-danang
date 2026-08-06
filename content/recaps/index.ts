import { cursorDanangNickMillerRecap } from '@/content/recaps/cursor-danang-nick-miller';
import { exampleEventRecap } from '@/content/recaps/example-event';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[cursorDanangNickMillerRecap.slug]: cursorDanangNickMillerRecap,
	[exampleEventRecap.slug]: exampleEventRecap,
};
