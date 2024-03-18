import express from 'express';
import { addBlog, deleteId, getAllBlogs, getById, getByUserId, updateBlog } from '../Controller/blog_controller.js';

const blogRouter = express.Router()


blogRouter.get('/', getAllBlogs)
blogRouter.post('/add', addBlog)
blogRouter.put('/update/:id', updateBlog )
blogRouter.get('/:id', getById)
blogRouter.delete('/:id', deleteId)
blogRouter.get('/user/:id', getByUserId)
export {blogRouter};