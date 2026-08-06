import { cursorDanangNickMillerPhotos } from '@/content/recaps/cursor-danang-nick-miller-photos';
import { RecapData } from '@/lib/types';

export const cursorDanangNickMillerRecap: RecapData = {
	slug: 'cursor-danang-nick-miller',
	title: 'Cursor Da Nang Meetup: With Nick Miller From Cursor',
	date: 'August 5, 2026',
	summary: [
		'Cursor Da Nang Meetup at The Local Beans: a packed room for an afternoon with Nick Miller from Cursor.',
		'Nick shared how Cursor is thinking about coding agents and the builder workflow, then stuck around to talk with the community.',
		'Thank you to Nick, to everyone who showed up, to Keith Vaughan, Johnny Tran, and Laksh for hosting, and to The Local Beans for the space. Sponsored by Cursor. More Cursor x Da Nang soon.',
	],
	speakers: [
		{
			name: 'Nick Miller',
			topic: 'Coding agents and the builder workflow',
			url: 'https://cursor.com',
		},
	],
	resources: [
		{ label: 'Join Cursor Da Nang on Luma', url: 'https://luma.com/cursor-da-nang-vietnam' },
		{ label: 'Cursor community', url: 'https://cursor.com/community' },
	],
	photos: cursorDanangNickMillerPhotos,
};
