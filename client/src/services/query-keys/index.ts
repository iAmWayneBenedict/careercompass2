import { mergeQueryKeys } from '@lukemorales/query-key-factory'
import { authKeys } from './auth'

const queryKeys = mergeQueryKeys(authKeys)

export default queryKeys
