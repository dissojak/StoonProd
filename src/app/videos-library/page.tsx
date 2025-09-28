"use client";
import React, { useState } from "react";

const videos = [
	{
		id: 1,
		title: "Sample Video 1",
		url: "https://www.w3schools.com/html/mov_bbb.mp4",
		thumbnail: "https://img.youtube.com/vi/YE7VzlLtp-4/0.jpg",
	},
	{
		id: 2,
		title: "Sample Video 2",
		url: "https://www.w3schools.com/html/movie.mp4",
		thumbnail: "https://img.youtube.com/vi/aqz-KE-bpKQ/0.jpg",
	},
	// Add more videos as needed
];

export default function VideoLibraryPage() {
	const [selected, setSelected] = useState<number | null>(null);

	return (
		<>
			<div className="w-full h-[100px]" />
			<div className="max-w-4xl mx-auto py-6 px-4">
				<h1 className="text-3xl font-bold mb-8 text-teal-700">
					Video Library
				</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
					{videos.map((video, idx) => (
						<div
							key={video.id}
							className="bg-white dark:bg-zinc-900 rounded-lg shadow hover:shadow-lg cursor-pointer overflow-hidden"
							onClick={() => setSelected(idx)}
						>
							<img
								src={video.thumbnail}
								alt={video.title}
								className="w-full h-40 object-cover"
							/>
							<div className="p-4">
								<h2 className="text-lg font-semibold text-teal-600 dark:text-teal-400">
									{video.title}
								</h2>
							</div>
						</div>
					))}
				</div>
				{selected !== null && (
					<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
						<div className="bg-white dark:bg-zinc-900 rounded-lg p-6 max-w-xl w-full relative">
							<button
								className="absolute top-2 right-2 text-gray-500 hover:text-teal-600 text-2xl"
								onClick={() => setSelected(null)}
								aria-label="Close"
							>
								&times;
							</button>
							<video
								controls
								className="w-full h-64 rounded"
								src={videos[selected].url}
								poster={videos[selected].thumbnail}
							/>
							<h2 className="mt-4 text-xl font-bold text-teal-700 dark:text-teal-400">
								{videos[selected].title}
							</h2>
						</div>
					</div>
				)}
			</div>
		</>
	);
}
