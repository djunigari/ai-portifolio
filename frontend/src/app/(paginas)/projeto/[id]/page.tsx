import Readme from "@/components/projetos/Readme"
import Cabecalho from "@/components/shared/Cabecalho"
import CarroselImagens from "@/components/shared/CarroselImagens"
import Container from "@/components/shared/Container"
import Tecnologias from "@/components/tecnologias/tecnologias"
import { obterReadme } from "@/functions/github"
import { obterProjeto } from "@/functions/projetos"

// export const revalidate = 3600

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	const projeto = await obterProjeto(id)
	if (!projeto) return null

	const readme = await obterReadme(projeto.repositorio)

	return (
		<div className="bg-black">
			<Cabecalho />
			<Container className="py-7 flex flex-col gap-10 items-center">
				<h1 className="text-3xl font-bold self-start">{projeto.nome}</h1>
				<CarroselImagens imagens={projeto.imagens.slice(1)} />
				<Tecnologias list={projeto.tecnologias} tamanhoMenor />
				<Readme markdown={readme} />
			</Container>
		</div>
	)
}
