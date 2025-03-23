export default interface Mensagem {
	id: string
	texto: string
	autor: string
	lado: "esquerdo" | "direito"
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icone: any
}
