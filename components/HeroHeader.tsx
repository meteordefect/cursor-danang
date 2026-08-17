'use client';

import React from 'react';
import BentoGrid from '@/components/BentoGrid';
import { Button } from '@/components/ui';
import { useI18n } from '@/lib/i18n';
import { HeroBentoPhotos } from '@/lib/types';

type HeroHeaderProps = {
	photos: HeroBentoPhotos;
};

const HeroHeader: React.FC<HeroHeaderProps> = ({ photos }) => {
	const { t } = useI18n();

	return (
		<header className="relative h-[calc(100svh-52px)] min-h-[620px] overflow-hidden border-t border-cursor-border">
			<div className="absolute inset-0">
				<BentoGrid
					desktopPhotos={photos.desktop}
					mobilePhotos={photos.mobile}
					cols={4}
					rows={4}
					mobileCols={2}
					mobileRows={4}
					gapClassName="gap-px"
				/>
			</div>

			{/* Compact glass panel — hugs copy so the bento photos stay visible behind it */}
			<div className="pointer-events-none absolute inset-0 z-10">
				<div className="pointer-events-auto absolute left-0 top-0 max-w-xl p-3 md:p-5 lg:p-6">
					<div className="cursor-on-image rounded-2xl border border-white/15 bg-black/40 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-7">
						<h1 className="cursor-display max-w-[14ch] text-cursor-text">{t('home.heroHeading')}</h1>
						<div className="mt-6">
							<Button href="#events" variant="primary" size="md">
								{t('home.exploreEvents')}
								<span aria-hidden="true">→</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default HeroHeader;
