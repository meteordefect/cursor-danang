'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, X } from 'lucide-react';
import { GalleryPhoto } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface PhotoGalleryProps {
	photos: GalleryPhoto[];
	embedded?: boolean;
}

function downloadName(src: string) {
	const file = src.split('/').pop() || 'photo.webp';
	const folder = src.split('/').slice(-2, -1)[0];
	return folder ? `${folder}-${file}` : file;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, embedded = false }) => {
	const { t } = useI18n();
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	if (photos.length === 0) {
		return null;
	}

	const currentPhoto = photos[currentIndex];

	const content = (
		<>
			<div className="flex items-baseline justify-between gap-4 mb-6">
				<div>
					<h2 className={embedded ? 'text-lg font-normal text-cursor-text' : 'text-xl font-normal text-cursor-text'}>
						{t('recap.galleryTitle')}
					</h2>
					<p className="text-cursor-text-muted text-sm mt-1">
						{t('recap.gallerySubtitle', { count: String(photos.length) })}
					</p>
				</div>
			</div>

			<div className="columns-2 gap-2 md:columns-3 [&>*]:mb-2">
				{photos.map((photo, index) => (
					<div
						key={`${photo.src}-${index}`}
						className="group relative mb-2 break-inside-avoid overflow-hidden rounded-sm border border-cursor-border bg-cursor-bg-dark"
					>
						<button
							type="button"
							className="block w-full text-left"
							onClick={() => {
								setCurrentIndex(index);
								setIsFullscreen(true);
							}}
							aria-label={t('recap.openPhoto', { index: String(index + 1) })}
						>
							{/* Native img keeps intrinsic height for masonry columns (next/image fill needs a fixed box). */}
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={photo.src}
								alt={photo.alt}
								loading="lazy"
								className="h-auto w-full transition-transform duration-300 motion-reduce:transition-none group-hover:scale-[1.02]"
							/>
						</button>
						<a
							href={photo.src}
							download={downloadName(photo.src)}
							className="absolute bottom-2 right-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/75"
							aria-label={t('recap.downloadPhotoLabel', { index: String(index + 1) })}
						>
							<Download className="h-4 w-4" />
						</a>
					</div>
				))}
			</div>

			<AnimatePresence>
				{isFullscreen ? (
					<div
						className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
						onClick={() => setIsFullscreen(false)}
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.98 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.98 }}
							transition={{ duration: 0.2 }}
							className="relative max-w-6xl w-full max-h-[90vh]"
							onClick={(event) => event.stopPropagation()}
						>
							<button
								onClick={() => setIsFullscreen(false)}
								className="absolute top-4 right-4 z-10 rounded-full border border-cursor-border bg-cursor-bg/80 p-2 text-cursor-text transition-colors hover:bg-cursor-bg"
								aria-label={t('recap.closeGallery')}
							>
								<X className="w-5 h-5" />
							</button>

							<div className="relative w-full h-[80vh] mb-4">
								<AnimatePresence mode="wait">
									<motion.div
										key={currentIndex}
										initial={{ opacity: 0, x: 40 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -40 }}
										transition={{ duration: 0.2 }}
										className="relative w-full h-full"
									>
										<Image src={currentPhoto.src} alt={currentPhoto.alt} fill className="object-contain" sizes="90vw" />
									</motion.div>
								</AnimatePresence>
							</div>

							<div className="flex flex-wrap items-center justify-center gap-3 rounded-sm border border-cursor-border bg-cursor-bg p-4">
								<p className="text-cursor-text font-medium">
									{t('recap.photoLabel', { index: String(currentIndex + 1), total: String(photos.length) })}
								</p>
								<a
									href={currentPhoto.src}
									download={downloadName(currentPhoto.src)}
									className="inline-flex items-center gap-1.5 rounded-full border border-cursor-border bg-cursor-surface px-3.5 py-1.5 text-sm text-cursor-text transition-colors hover:bg-cursor-surface-raised"
								>
									<Download className="h-4 w-4" />
									{t('recap.downloadPhoto')}
								</a>
							</div>

							{photos.length > 1 ? (
								<>
									<button
										onClick={() => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)}
										className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-cursor-border bg-cursor-bg/80 p-2 text-cursor-text transition-colors hover:bg-cursor-bg"
										aria-label={t('recap.prevPhoto')}
									>
										<ChevronLeft className="w-6 h-6" />
									</button>
									<button
										onClick={() => setCurrentIndex((prev) => (prev + 1) % photos.length)}
										className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-cursor-border bg-cursor-bg/80 p-2 text-cursor-text transition-colors hover:bg-cursor-bg"
										aria-label={t('recap.nextPhoto')}
									>
										<ChevronRight className="w-6 h-6" />
									</button>
								</>
							) : null}
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
		</>
	);

	if (embedded) {
		return <div className="border-t border-cursor-border mt-6 pt-6">{content}</div>;
	}

	return (
		<section className="mb-8 rounded-sm border border-cursor-border bg-cursor-surface p-6 md:p-8">{content}</section>
	);
};

export default PhotoGallery;
