"use client"
import useChat from "@/hooks/useChat"
import { ChangeEvent, KeyboardEvent as ReactKeyboardEvent, useState } from "react"

export default function Chat() {
	const { chatId, mensagens, adicionarMensagem } = useChat()
	const [texto, setTexto] = useState("")

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<ul>
				{mensagens.map((mensagem) => (
					<li key={mensagem.id} className="flex gap-2">
						<div>{mensagem.autor}:</div>
						<div>{mensagem.texto}</div>
					</li>
				))}
			</ul>

			<input
				type="text"
				value={texto}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					setTexto(e.target.value)
				}}
				onKeyDown={(e: ReactKeyboardEvent<HTMLInputElement>) => {
					if (e.key === "Enter") {
						adicionarMensagem(texto)
						setTexto("")
					}
				}}
			/>
		</div>
	)
}
