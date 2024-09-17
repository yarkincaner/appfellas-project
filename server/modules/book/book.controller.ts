import { Request, Response } from 'express'
import { getAllBooks } from './book.service'

export const getBooks = async (req: Request, res: Response) => {
  try {
    const result = await getAllBooks()
    return res.status(200).send(result)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ message: 'Something went wrong' })
  }
}
