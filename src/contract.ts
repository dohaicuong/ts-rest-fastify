import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

const PostSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
})

export const contract = c.router({
  createPost: {
    method: 'POST',
    path: '/posts',
    summary: 'Create a post',
    responses: {
      201: PostSchema,
    },
    body: z.object({
      title: z.string(),
      body: z.string(),
    })
  },
  getPost: {
    method: 'GET',
    path: '/posts/:id',
    summary: 'Get a post by id',
    responses: {
      200: PostSchema,
      404: z.object({
        message: z.string()
      })
    }
  },
})
