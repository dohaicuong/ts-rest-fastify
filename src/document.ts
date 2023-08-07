import { generateOpenApi } from '@ts-rest/open-api'
import { contract } from './contract'

export const openApiDocument = generateOpenApi(
  contract,
  {
    info: {
      title: 'Posts API',
      version: '0.0.1',
    },
  },
  { setOperationId: true }
)
