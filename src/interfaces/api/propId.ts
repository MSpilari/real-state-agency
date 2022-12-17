import { ParsedUrlQuery } from 'querystring'

export interface CtxParams extends ParsedUrlQuery {
  propId: string
}
