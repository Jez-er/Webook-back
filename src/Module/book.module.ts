import { Request, Response } from 'express'
import BookService from '../Service/Book.service'
import { APP, DEFAULT_URL } from '../app'

class bookModule {
	async SendAllData() {
		APP.get(`${DEFAULT_URL}books`, async (req: Request, res: Response) => {
			const books = await BookService.GetAllData()
			res.json(books)
		})
	}

	async SendData() {
		APP.get(`${DEFAULT_URL}books/:id`, async (req: Request, res: Response) => {
			const { id } = req.params
			const book = await BookService.GetOneData(id)
			res.json(book)
		})
	}
}

export default new bookModule()
