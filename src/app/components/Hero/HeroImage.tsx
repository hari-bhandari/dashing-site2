import Image from "next/image";

type HeroImageProps = {
	theme?: string;
};

export default function HeroImage({ theme }: HeroImageProps) {
	void theme;
	return (
		
		<Image
				src="/heroGraphic.png"
				alt="Hero product analytics and performance dashboards"
				width={820}
				height={620}
				priority
				className="h-auto w-full max-w-[450px] select-none"
			/>
	
	);
}
