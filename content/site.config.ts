// Cursor Da Nang — keep the required footer template credit in components/Footer.tsx (see NOTICE / ATTRIBUTION.md).
export const siteConfig = {
	communityName: 'Cursor Da Nang',
	communityNameLocal: 'Đà Nẵng',
	city: 'Da Nang',
	country: 'Vietnam',
	lumaUrl: 'https://luma.com/cursor-da-nang-vietnam',
	lumaCalendarEmbedUrl: '',
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'en',
	locales: ['en'],
	footerTagline: 'Made with Cursor by ambassadors in Da Nang',
	/** Short site description for <meta>, Open Graph, and Twitter cards. Keep it concrete. */
	description: 'Cursor meetups, workshops, and event recaps in Da Nang, Vietnam.',
	/** Path under /public for the default 1200×630 share image. */
	ogImage: '/og.jpg',
	sections: {
		matchmaking: false,
		photoDisclaimer: false,
		lumaCalendar: false,
		communityTweets: false,
		/** Set true after replacing sample quotes in content/community-quotes.ts */
		communityQuotes: false,
	},
};

export type SiteConfig = typeof siteConfig;
