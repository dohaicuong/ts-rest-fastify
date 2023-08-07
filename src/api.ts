import { initServer } from '@ts-rest/fastify'
import { contract } from './contract'

const s = initServer()

const router = s.router(contract, {
  getPost: async ({ params: { id } }) => {
    if (id === 'POST:1') {
      return {
        status: 200,
        body: {
          id,
          title: 'Post 1',
          body: 'Post 1'
        }
      }
    }

    return {
      status: 404,
      body: {
        message: `Post ${id} is not found`
      }
    }
  },
  createPost: async ({ body }) => {
    return {
      status: 201,
      body: {
        id: 'POST:2',
        title: body.title,
        body: body.body,
      }
    }
  }
})

export const apiPlugin = s.plugin(router)
