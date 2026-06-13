'use client'

import { urls } from '@/constants/urls'
import { FormInitLogo } from '@/form-builder/components/logos'

const Forminit = () => (
	<a
		href={urls.sponsors.forminit}
		target="_blank"
		rel="noopener noreferrer"
		className="group/left flex flex-1 items-center justify-center py-1.5 group-hover:border-primary/30 group-hover:bg-background/90 h-full"
	>
		<div className="flex flex-col items-center gap-2.5">
			<div className="flex items-center gap-2 text-foreground/90 group-hover/left:text-primary">
				<div className="size-8 shrink-0 [&_svg]:size-full">
					<FormInitLogo />
				</div>
				<div className="flex flex-col items-start">
					<span className="leading-tight font-medium text-xs sm:text-sm">
						Forminit.com
					</span>
					<span className="text-muted-foreground text-sm">
						Form API for every form you ship
					</span>
				</div>
			</div>
		</div>
	</a>
)
const Scrimba = () => (
	<a
		href="https://scrimba.com/t0ai?via=nextradardotdev"
		target="_blank"
		rel="noopener noreferrer"
		className="group/right flex flex-1 items-center justify-center py-1.5 group-hover:border-primary/30 group-hover:bg-background/90 "
	>
		<div className="flex flex-col items-center gap-2.5">
			<div className="flex items-center gap-2 text-foreground/90 group-hover/right:text-primary">
				<img
					src="https://scrimba.com/static/brand/favicon-256x256.png"
					alt="Scrimba"
					className="size-8 rounded-full"
				/>
				<div className="flex flex-col items-start">
					<span className="leading-tight font-medium text-xs sm:text-sm">
						Interactive AI tutorials
					</span>
					<span className="text-muted-foreground text-xs ">
						Free and premium AI tutorials
					</span>
				</div>
			</div>
		</div>
	</a>
)
export function SponsorBanner() {
	return (
		<div className="w-full overflow-hidden rounded-sm">
			<div
				className="grid grid-cols-12 
      border-b  bg-background h-[3.7rem]"
			>
				<div className="col-span-2 hidden lg:block  border-r"></div>
				<div className="col-span-full sm:col-span-6 lg:col-span-4 bg-background sm:border-r  py-0.5">
					<Forminit />
				</div>

				<div className="col-span-6 lg:col-span-4 bg-background py-0.5 hidden sm:block">
					<Scrimba />
				</div>
				<div className="col-span-2 hidden lg:block border-l "></div>
			</div>
		</div>
	)
}
