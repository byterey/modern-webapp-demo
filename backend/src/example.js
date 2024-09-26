import dotenv from 'dotenv'
dotenv.config()

import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'

await initDatabase()

const post = new Post({
  title: 'Hello Propsofy!',
  author: 'Bar Foo',
  contents:
    'Powered by MongoDB magic, this post is stored with precision using Mongoose wizardry.',
  tags: ['mongoose', 'mongodb'],
})

await post.save()

const createdPost = await post.save()

await Post.findByIdAndUpdate(createdPost._id, {
  $set: { title: 'Hello again, Propsofy!' },
})

const posts = await Post.find()
console.log(posts)
