import * as schema from './schema'
import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from 'drizzle-orm'


const db = drizzle (sql, {
  schema,
})
export default db