import { Module } from "@nestjs/common"
import { DbModule } from "src/db/db.module"
import { ProjetoController } from "./projeto.controller"
import { ProjetoPrisma } from "./projeto.prisma"

@Module({
	imports: [DbModule],
	providers: [ProjetoPrisma],
	controllers: [ProjetoController],
})
export class ProjetoModule {}
