import fastify from 'fastify'

import { apiPlugin } from './api'

import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUI from '@fastify/swagger-ui'
import { openApiDocument } from './document'

export const app = fastify()
  .register(fastifySwagger, {
    swagger: openApiDocument
  })
  .register(fastifySwaggerUI)
  .register(apiPlugin)
