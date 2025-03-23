export async function obterReadme(repoUrl: string) {
	const repositorio = repoUrl.split("github.com/")[1]
	const readme = `https://raw.githubusercontent.com/${repositorio}/main/README.md`
	const response = await fetch(readme)
	return response.text()
}
