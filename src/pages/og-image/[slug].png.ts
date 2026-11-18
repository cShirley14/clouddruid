import type { APIContext, ImageMetadata, InferGetStaticPropsType } from "astro";

import { Resvg } from "@resvg/resvg-js";
import satori, { type SatoriOptions } from "satori";
import { html } from "satori-html";
import sharp from "sharp";
import { getAllPosts } from "src/data/post";

import RobotoMonoBold from "@/assets/roboto-mono-700.ttf";
import RobotoMono from "@/assets/roboto-mono-regular.ttf";
import { siteConfig } from "@/site-config";
import { getFormattedDate } from "@/utils";

const ogOptions: SatoriOptions = {
	// debug: true,
	fonts: [
		{
			data: Buffer.from(RobotoMono),
			name: "Roboto Mono",
			style: "normal",
			weight: 400,
		},
		{
			data: Buffer.from(RobotoMonoBold),
			name: "Roboto Mono",
			style: "normal",
			weight: 700,
		},
	],
	height: 630,
	width: 1200,
};

// Any source image (any size or aspect ratio) is center-cropped to the card size and
// re-encoded as a small JPEG, so the output is always 1200x630 with a bounded file size.
async function coverToDataUri(src: ImageMetadata): Promise<string | undefined> {
	const fsPath = (src as ImageMetadata & { fsPath?: string }).fsPath;
	if (!fsPath) return undefined;
	const buf = await sharp(fsPath.split("?")[0])
		.resize(1200, 630, { fit: "cover", position: "centre" })
		.jpeg({ quality: 70 })
		.toBuffer();
	return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

// With a cover: photo fills the card, a dark overlay keeps the text readable, and the
// same text layout sits on top so every card shares one safe area.
const markupWithCover = (title: string, pubDate: string, bg: string) =>
	html`<div tw="flex w-full h-full bg-[#1d1f21]">
		<img src="${bg}" tw="absolute top-0 left-0 w-[1200px] h-[630px]" />
		<div tw="flex absolute top-0 left-0 w-full h-full" style="background-color: rgba(29, 31, 33, 0.78);"></div>
		<div tw="flex flex-col absolute top-0 left-0 w-full h-full text-[#c9cacc]">
			<div tw="flex flex-col flex-1 w-full p-10 justify-center">
				<p tw="text-2xl mb-6">${pubDate}</p>
				<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
			</div>
			<div tw="flex items-center justify-between w-full p-10 border-t border-[#cdffb8] text-xl">
				<div tw="flex items-center">
					<p tw="ml-3 font-semibold">${siteConfig.title}</p>
				</div>
				<p>by ${siteConfig.author}</p>
			</div>
		</div>
	</div>`;

const markup = (title: string, pubDate: string) =>
	html`<div tw="flex flex-col w-full h-full bg-[#1d1f21] text-[#c9cacc]">
		<div tw="flex flex-col flex-1 w-full p-10 justify-center">
			<p tw="text-2xl mb-6">${pubDate}</p>
			<h1 tw="text-6xl font-bold leading-snug text-white">${title}</h1>
		</div>
		<div tw="flex items-center justify-between w-full p-10 border-t border-[#cdffb8] text-xl">
			<div tw="flex items-center">
				<p tw="ml-3 font-semibold">${siteConfig.title}</p>
			</div>
			<p>by ${siteConfig.author}</p>
		</div>
	</div>`;

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
	const { cover, pubDate, title } = context.props as Props;

	const postDate = getFormattedDate(pubDate, {
		month: "long",
		weekday: "long",
	});
	const bg = cover ? await coverToDataUri(cover) : undefined;
	const svg = await satori(
		bg ? markupWithCover(title, postDate, bg) : markup(title, postDate),
		ogOptions,
	);
	const png = new Uint8Array(new Resvg(svg).render().asPng());
	return new Response(png, {
		headers: {
			"Cache-Control": "public, max-age=31536000, immutable",
			"Content-Type": "image/png",
		},
	});
}

export async function getStaticPaths() {
	const posts = await getAllPosts();
	return posts
		.filter(({ data }) => !data.ogImage)
		.map((post) => ({
			params: { slug: post.id },
			props: {
				cover: post.data.coverImage?.src,
				pubDate: post.data.updatedDate ?? post.data.publishDate,
				title: post.data.title,
			},
		}));
}
