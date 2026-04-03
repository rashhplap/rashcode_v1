import type { ModelName } from './model.js'
import type { APIProvider } from './providers.js'

export type ModelConfig = Record<APIProvider, ModelName>

// ---------------------------------------------------------------------------
// OpenAI-compatible model mappings
// Maps RASH model tiers to sensible defaults for popular providers.
// Override with OPENAI_MODEL, ANTHROPIC_MODEL, or settings.model
// ---------------------------------------------------------------------------
export const OPENAI_MODEL_DEFAULTS = {
  opus: 'gpt-4o',           // best reasoning
  sonnet: 'gpt-4o-mini',    // balanced
  haiku: 'gpt-4o-mini',     // fast & cheap
} as const

// ---------------------------------------------------------------------------
// Gemini model mappings
// Maps RASH model tiers to Google Gemini equivalents.
// Override with GEMINI_MODEL env var.
// ---------------------------------------------------------------------------
export const GEMINI_MODEL_DEFAULTS = {
  opus: 'gemini-2.5-pro-preview-03-25',   // most capable
  sonnet: 'gemini-2.0-flash',              // balanced
  haiku: 'gemini-2.0-flash-lite',          // fast & cheap
} as const

// @[MODEL LAUNCH]: Add a new RASH_*_CONFIG constant here. Double check the correct model strings
// here since the pattern may change.

export const RASH_3_7_SONNET_CONFIG = {
  firstParty: 'RASH-3-7-sonnet-20250219',
  bedrock: 'us.anthropic.RASH-3-7-sonnet-20250219-v1:0',
  vertex: 'RASH-3-7-sonnet@20250219',
  foundry: 'RASH-3-7-sonnet',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-2.0-flash',
} as const satisfies ModelConfig

export const RASH_3_5_V2_SONNET_CONFIG = {
  firstParty: 'RASH-3-5-sonnet-20241022',
  bedrock: 'anthropic.RASH-3-5-sonnet-20241022-v2:0',
  vertex: 'RASH-3-5-sonnet-v2@20241022',
  foundry: 'RASH-3-5-sonnet',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-2.0-flash',
} as const satisfies ModelConfig

export const RASH_3_5_HAIKU_CONFIG = {
  firstParty: 'RASH-3-5-haiku-20241022',
  bedrock: 'us.anthropic.RASH-3-5-haiku-20241022-v1:0',
  vertex: 'RASH-3-5-haiku@20241022',
  foundry: 'RASH-3-5-haiku',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-2.0-flash-lite',
} as const satisfies ModelConfig

export const RASH_HAIKU_4_5_CONFIG = {
  firstParty: 'RASH-haiku-4-5-20251001',
  bedrock: 'us.anthropic.RASH-haiku-4-5-20251001-v1:0',
  vertex: 'RASH-haiku-4-5@20251001',
  foundry: 'RASH-haiku-4-5',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-2.0-flash-lite',
} as const satisfies ModelConfig

export const RASH_SONNET_4_CONFIG = {
  firstParty: 'RASH-sonnet-4-20250514',
  bedrock: 'us.anthropic.RASH-sonnet-4-20250514-v1:0',
  vertex: 'RASH-sonnet-4@20250514',
  foundry: 'RASH-sonnet-4',
  openai: 'gpt-4o-mini',
  gemini: 'gemini-2.0-flash',
} as const satisfies ModelConfig

export const RASH_SONNET_4_5_CONFIG = {
  firstParty: 'RASH-sonnet-4-5-20250929',
  bedrock: 'us.anthropic.RASH-sonnet-4-5-20250929-v1:0',
  vertex: 'RASH-sonnet-4-5@20250929',
  foundry: 'RASH-sonnet-4-5',
  openai: 'gpt-4o',
  gemini: 'gemini-2.0-flash',
} as const satisfies ModelConfig

export const RASH_OPUS_4_CONFIG = {
  firstParty: 'RASH-opus-4-20250514',
  bedrock: 'us.anthropic.RASH-opus-4-20250514-v1:0',
  vertex: 'RASH-opus-4@20250514',
  foundry: 'RASH-opus-4',
  openai: 'gpt-4o',
  gemini: 'gemini-2.5-pro-preview-03-25',
} as const satisfies ModelConfig

export const RASH_OPUS_4_1_CONFIG = {
  firstParty: 'RASH-opus-4-1-20250805',
  bedrock: 'us.anthropic.RASH-opus-4-1-20250805-v1:0',
  vertex: 'RASH-opus-4-1@20250805',
  foundry: 'RASH-opus-4-1',
  openai: 'gpt-4o',
  gemini: 'gemini-2.5-pro-preview-03-25',
} as const satisfies ModelConfig

export const RASH_OPUS_4_5_CONFIG = {
  firstParty: 'RASH-opus-4-5-20251101',
  bedrock: 'us.anthropic.RASH-opus-4-5-20251101-v1:0',
  vertex: 'RASH-opus-4-5@20251101',
  foundry: 'RASH-opus-4-5',
  openai: 'gpt-4o',
  gemini: 'gemini-2.5-pro-preview-03-25',
} as const satisfies ModelConfig

export const RASH_OPUS_4_6_CONFIG = {
  firstParty: 'RASH-opus-4-6',
  bedrock: 'us.anthropic.RASH-opus-4-6-v1',
  vertex: 'RASH-opus-4-6',
  foundry: 'RASH-opus-4-6',
  openai: 'gpt-4o',
  gemini: 'gemini-2.5-pro-preview-03-25',
} as const satisfies ModelConfig

export const RASH_SONNET_4_6_CONFIG = {
  firstParty: 'RASH-sonnet-4-6',
  bedrock: 'us.anthropic.RASH-sonnet-4-6',
  vertex: 'RASH-sonnet-4-6',
  foundry: 'RASH-sonnet-4-6',
  openai: 'gpt-4o',
  gemini: 'gemini-2.0-flash',
} as const satisfies ModelConfig

// @[MODEL LAUNCH]: Register the new config here.
export const ALL_MODEL_CONFIGS = {
  haiku35: RASH_3_5_HAIKU_CONFIG,
  haiku45: RASH_HAIKU_4_5_CONFIG,
  sonnet35: RASH_3_5_V2_SONNET_CONFIG,
  sonnet37: RASH_3_7_SONNET_CONFIG,
  sonnet40: RASH_SONNET_4_CONFIG,
  sonnet45: RASH_SONNET_4_5_CONFIG,
  sonnet46: RASH_SONNET_4_6_CONFIG,
  opus40: RASH_OPUS_4_CONFIG,
  opus41: RASH_OPUS_4_1_CONFIG,
  opus45: RASH_OPUS_4_5_CONFIG,
  opus46: RASH_OPUS_4_6_CONFIG,
} as const satisfies Record<string, ModelConfig>

export type ModelKey = keyof typeof ALL_MODEL_CONFIGS

/** Union of all canonical first-party model IDs, e.g. 'RASH-opus-4-6' | 'RASH-sonnet-4-5-20250929' | … */
export type CanonicalModelId =
  (typeof ALL_MODEL_CONFIGS)[ModelKey]['firstParty']

/** Runtime list of canonical model IDs — used by comprehensiveness tests. */
export const CANONICAL_MODEL_IDS = Object.values(ALL_MODEL_CONFIGS).map(
  c => c.firstParty,
) as [CanonicalModelId, ...CanonicalModelId[]]

/** Map canonical ID → internal short key. Used to apply settings-based modelOverrides. */
export const CANONICAL_ID_TO_KEY: Record<CanonicalModelId, ModelKey> =
  Object.fromEntries(
    (Object.entries(ALL_MODEL_CONFIGS) as [ModelKey, ModelConfig][]).map(
      ([key, cfg]) => [cfg.firstParty, key],
    ),
  ) as Record<CanonicalModelId, ModelKey>
