import express from 'express';

import mongoose from 'mongoose';

import { router } from './src/Routes/user_routes.js'
import { blogRouter } from './src/Routes/blog_routes.js';


const app = express();
const port = 7000;
 
app.use(express.json())
app.use('/api/user',router);
app.use('/api/blog',blogRouter)

app.listen(port, () => console.log(`app listening on port ${port}!`))

mongoose.
connect('mongodb+srv://lovetemple:LoveTemple@first.paospvf.mongodb.net/?retryWrites=true&w=majority&appName=First')
.then(()=> console.log('Database connected'))
.catch((err)=> console.log(err))
