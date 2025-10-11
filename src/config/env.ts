/* eslint-disable n/no-process-env */
import path from 'path';
import dotenv from 'dotenv';
import moduleAlias from 'module-alias';
import { z } from 'zod';
import fs from 'fs';

const root = process.cwd();
const distPath = path.join(root, 'dist');
const distSrc = path.join(distPath, 'src');
const srcPath = path.join(root, 'src');

// Use dist aliases only if the dist folder and dist/config.js exist
const useDist = fs.existsSync(distPath);

// Check the env
const RUNTIME_NODE_ENV = (process.env.NODE_ENV ?? 'development');

const envPath = path.join( root, '/.env.' + RUNTIME_NODE_ENV);


// Load .env only if it exists
if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  console.warn(`Environment file not found at: ${envPath}`);
}

if (useDist) {
  moduleAlias.addAlias('@src', distSrc);
} else {
  moduleAlias.addAlias('@src', srcPath);
}

const envSchema = z.object({
  PORT: z.string().default('3000'),
  RPC_URL: z.string(),
  WS_RPC_URL: z.string(),
  CONTRACT_ADDRESS: z.string(),
  REDIS_URL: z.string(),
  STREAM_KEY: z.string(),

  CONFIRMATIONS: z.string().transform(Number),
  POLL_INTERVAL_MS: z.string().transform(Number),
  START_BLOCK_BACKOFF: z.string().transform(Number),
  BATCH_BLOCKS: z.string().transform(Number),
  MAX_RANGE_SIZE: z.string().transform(Number),
})

const parsedEnvSchema = envSchema.safeParse(process.env);

if(!parsedEnvSchema.success) {
  console.error('Env validation failed:', parsedEnvSchema.error.format());
  throw new Error('Invalid environment variables');
}

export const { 
  PORT,
  RPC_URL,
  WS_RPC_URL,
  CONTRACT_ADDRESS,
  REDIS_URL,
  STREAM_KEY,
  CONFIRMATIONS,
  POLL_INTERVAL_MS,
  START_BLOCK_BACKOFF,
  BATCH_BLOCKS,
  MAX_RANGE_SIZE,
 } = parsedEnvSchema.data;