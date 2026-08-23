import { cafeCursorDanangPhotos } from '@/content/recaps/cafe-cursor-danang-photos';
import { RecapData } from '@/lib/types';

export const cafeCursorDanangRecap: RecapData = {
	slug: 'cafe-cursor-danang',
	title: 'Cafe Cursor Da Nang',
	titleLocal: 'Cafe Cursor Đà Nẵng',
	date: 'August 22, 2026',
	dateLocal: '22 tháng 8, 2026',
	attendees: 100,
	summary: [
		'Cafe Cursor Da Nang at The PowerHouse: morning and afternoon sessions, free coffee, and a packed room of builders with laptops open.',
		'We started with an open Q&A, taking questions from the crowd, then Joe Bellissimo of Scala.business shared the core principles that keep his development streamlined and error-free.',
		'Thank you to Joe, to everyone who came through either slot, to the Cursor Da Nang hosts, and to Frontier Club and The PowerHouse. More Cafe Cursor soon.',
	],
	summaryLocal: [
		'Cafe Cursor Đà Nẵng tại The PowerHouse: buổi sáng và buổi chiều, cà phê miễn phí, và một phòng đông người xây sản phẩm với laptop mở.',
		'Chúng tôi bắt đầu bằng phần Q&A, trả lời câu hỏi từ mọi người, sau đó Joe Bellissimo từ Scala.business chia sẻ những nguyên tắc cốt lõi giúp quy trình phát triển của anh ấy gọn, nhanh và ít lỗi.',
		'Cảm ơn Joe, cảm ơn mọi người đã đến cả hai khung giờ, cảm ơn các host Cursor Đà Nẵng, Frontier Club và The PowerHouse. Hẹn gặp lại ở Cafe Cursor tiếp theo.',
	],
	speakers: [
		{
			name: 'Cursor Da Nang hosts',
			topic: 'Open Q&A with the crowd',
			topicLocal: 'Q&A cùng khán giả',
		},
		{
			name: 'Joe Bellissimo',
			topic: 'Top development tips — core principles for streamlined, error-free shipping',
			topicLocal: 'Mẹo phát triển — nguyên tắc cốt lõi để ship gọn và ít lỗi',
			url: 'https://scala.business',
		},
	],
	resources: [
		{ label: 'Event on Luma', url: 'https://luma.com/cursor-ii7j' },
		{ label: 'Join Cursor Da Nang on Luma', url: 'https://luma.com/cursor-da-nang-vietnam' },
		{ label: 'Frontier Club', url: 'https://frontierclub.ai' },
		{ label: 'Scala.business', url: 'https://scala.business' },
		{ label: 'Cursor community', url: 'https://cursor.com/community' },
	],
	photos: cafeCursorDanangPhotos,
};
