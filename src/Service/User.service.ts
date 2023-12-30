import prisma from '../../prisma/PrismaClient'
import { TUser } from '../types/users.types'

class UserService {
	async GetAllData() {
		const allUsers: TUser[] = await prisma.user.findMany()
		return allUsers    
}

async GetOneData(id: string) {
		const User: TUser | null = await prisma.user.findUnique({
				where: { id: Number(id) }
			})
		return User    
}
}

export default new UserService()
