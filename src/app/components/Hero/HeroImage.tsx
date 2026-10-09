import Image from "next/image";

type HeroImageProps = {
	theme?: string;
};

export default function HeroImage({ theme }: HeroImageProps) {
	void theme;
	return (
		
		<Image
				src="/heroGraphic.png"
				alt="Laptop displaying business analytics dashboards with floating chart panels"
				width={820}
				height={620}
				priority
				className="h-auto w-full max-w-[450px] select-none"
			/>
	
	);
}
