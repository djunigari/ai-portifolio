import Mensagem from "@/model/Mensagem"
import { Id } from "@core"
import useLocalStorage from "./useLocalStorage"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])

	function adicionarMensagem(texto: string) {
		const novaMensagem: Mensagem = {
			id: Id.gerar(),
			texto,
			autor: "Visitante",
			lado: "direito",
			icone: null,
		}
		setMensagens([...mensagens, novaMensagem])
	}

	return { chatId, mensagens, setMensagens, adicionarMensagem }
}
