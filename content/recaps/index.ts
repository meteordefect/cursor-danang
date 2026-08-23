import { cafeCursorDanangRecap } from '@/content/recaps/cafe-cursor-danang';
import { cursorDanangNickMillerRecap } from '@/content/recaps/cursor-danang-nick-miller';
import { exampleEventRecap } from '@/content/recaps/example-event';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[cafeCursorDanangRecap.slug]: cafeCursorDanangRecap,
	[cursorDanangNickMillerRecap.slug]: cursorDanangNickMillerRecap,
	[exampleEventRecap.slug]: exampleEventRecap,
};
