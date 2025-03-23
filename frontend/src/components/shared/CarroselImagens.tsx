import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export interface CarroselImagensProps {
	imagens: string[]
}

export default function CarroselImagens(props: CarroselImagensProps) {
	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{props.imagens.map((img) => (
					<CarouselItem key={img} className="relative h-96 w-full">
						<Image src={img} alt="Imagem" fill className="object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
