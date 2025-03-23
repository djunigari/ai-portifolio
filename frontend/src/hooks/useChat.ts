import conversar from "@/functions/chat"
import Mensagem from "@/model/Mensagem"
import { Id } from "@core"
import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.gerar())
	const [mensagens, setMensagens] = useLocalStorage<Mensagem[]>("mensagens", [])
	const [pensando, setPensando] = useState(false)

	async function adicionarMensagem(texto: string) {
		try {
			setPensando(true)
			const novaMensagem: Mensagem = {
				id: Id.gerar(),
				texto,
				autor: "Visitante",
				lado: "direito",
			}
			setMensagens((msgs) => [...msgs, novaMensagem])

			const resposta = await conversar(chatId, novaMensagem)

			if (!resposta) return

			const mensagemResposta: Mensagem = {
				id: Id.gerar(),
				texto: resposta,
				autor: "Assistente",
				lado: "esquerdo",
			}

			setMensagens((msgs) => [...msgs, mensagemResposta])
		} finally {
			setPensando(false)
		}
	}

	function limparMensagens() {
		setMensagens([])
	}

	return { chatId, mensagens, pensando, setMensagens, adicionarMensagem, limparMensagens }
}
