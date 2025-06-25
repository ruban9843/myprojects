import { boolean, text } from "drizzle-orm/gel-core"
import { varchar } from "drizzle-orm/mysql-core"
import {pgTable,serial} from "drizzle-orm/pg-core"

export const USER_TABLE=pgTable('users',{
    id:serial().primaryKey(),
    username:text().notNull(),
    email:text().notNull(),
    isMember:boolean().notNull().default(false)
})