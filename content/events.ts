import { CursorEvent } from '@/lib/types';

export const events: CursorEvent[] = [
	{
		id: 'cafe-cursor-danang',
		title: 'Cafe Cursor Da Nang',
		date: '2026-08-22',
		displayDate: 'August 22, 2026',
		attendees: 100,
		location: 'The PowerHouse, 87-93 Nguyễn Thái Học, Hải Châu, Da Nang',
		lumaUrl: 'https://luma.com/cursor-ii7j',
		status: 'past',
		thumbnail: '/images/events/cafe-cursor-danang/045.webp',
		recapPath: '/recaps/cafe-cursor-danang',
	},
	{
		id: 'cursor-danang-nick-miller',
		title: 'Cursor Da Nang Meetup: With Nick Miller From Cursor',
		date: '2026-08-05',
		displayDate: 'August 5, 2026',
		location: 'The Local Beans, 186 Phan Châu Trinh, Hải Châu, Da Nang',
		lumaUrl: 'https://luma.com/cursor-fr4s',
		status: 'past',
		thumbnail: '/images/events/cursor-danang-nick-miller/group.webp',
		recapPath: '/recaps/cursor-danang-nick-miller',
	},
	{
		id: 'ai-meetup-frontier-club-4',
		title: 'AI Meetup By Frontier Club',
		date: '2026-08-08',
		displayDate: 'August 8, 2026',
		location: 'The PowerHouse, Hải Châu, Da Nang',
		lumaUrl: 'https://luma.com/v09x4904',
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
