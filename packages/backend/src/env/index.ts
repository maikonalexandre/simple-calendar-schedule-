import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333),
  HOST: z.string().default('0.0.0.0'),
  JTW_HASH: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid enviromment variables', _env.error.format())
  throw new Error('Invalid enviromment variables')
}

export const env = _env.data