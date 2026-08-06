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

			{/* Opaque panel over the top-left bento slot: full width × half height on mobile, half × half on desktop */}
			<div className="pointer-events-none absolute inset-0 z-10">
				<div className="pointer-events-auto absolute left-0 top-0 h-1/2 w-full p-1 md:w-1/2 md:p-1.5">
					<div className="flex h-full flex-col justify-end rounded-2xl border border-cursor-border bg-cursor-surface p-6 md:p-8 lg:p-10">
						<h1 className="cursor-display max-w-[18ch] text-cursor-text">{t('home.heroHeading')}</h1>
						<div className="mt-7">
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
