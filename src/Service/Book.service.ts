import prisma from "../../prisma/PrismaClient"
import { books } from "../types/books.types"

class BookService {
    async GetAllData() {
        const allBooks: books[] = await prisma.book.findMany()
        return allBooks    
    }

    async GetOneData(id: string) {
        const Books: books | null = await prisma.book.findUnique({
            where: { id: Number(id) }
          })
        return Books    
    }
}

export default new BookService()