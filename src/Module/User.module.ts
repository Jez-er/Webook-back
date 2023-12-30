import { Request, Response } from 'express'
import UserService from '../Service/User.service'
import { APP, DEFAULT_URL } from '../app'
class UserModule {
	async SendAllData() {
		APP.get(`${DEFAULT_URL}users`, async (req: Request, res: Response) => {
			const books = await UserService.GetAllData()
			res.json(books)
		})
	}

	async SendData() {
		APP.get(`${DEFAULT_URL}users/:id`, async (req: Request, res: Response) => {
			const { id } = req.params
			const book = await UserService.GetOneData(id)
			res.json(book)
		})
	}
}

export default new UserModule()
