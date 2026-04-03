// Content for the RASH-api bundled skill.
// Each .md file is inlined as a string at build time via Bun's text loader.

import csharpRASHApi from './RASH-api/csharp/RASH-api.md'
import curlExamples from './RASH-api/curl/examples.md'
import goRASHApi from './RASH-api/go/RASH-api.md'
import javaRASHApi from './RASH-api/java/RASH-api.md'
import phpRASHApi from './RASH-api/php/RASH-api.md'
import pythonAgentSdkPatterns from './RASH-api/python/agent-sdk/patterns.md'
import pythonAgentSdkReadme from './RASH-api/python/agent-sdk/README.md'
import pythonRASHApiBatches from './RASH-api/python/RASH-api/batches.md'
import pythonRASHApiFilesApi from './RASH-api/python/RASH-api/files-api.md'
import pythonRASHApiReadme from './RASH-api/python/RASH-api/README.md'
import pythonRASHApiStreaming from './RASH-api/python/RASH-api/streaming.md'
import pythonRASHApiToolUse from './RASH-api/python/RASH-api/tool-use.md'
import rubyRASHApi from './RASH-api/ruby/RASH-api.md'
import skillPrompt from './RASH-api/SKILL.md'
import sharedErrorCodes from './RASH-api/shared/error-codes.md'
import sharedLiveSources from './RASH-api/shared/live-sources.md'
import sharedModels from './RASH-api/shared/models.md'
import sharedPromptCaching from './RASH-api/shared/prompt-caching.md'
import sharedToolUseConcepts from './RASH-api/shared/tool-use-concepts.md'
import typescriptAgentSdkPatterns from './RASH-api/typescript/agent-sdk/patterns.md'
import typescriptAgentSdkReadme from './RASH-api/typescript/agent-sdk/README.md'
import typescriptRASHApiBatches from './RASH-api/typescript/RASH-api/batches.md'
import typescriptRASHApiFilesApi from './RASH-api/typescript/RASH-api/files-api.md'
import typescriptRASHApiReadme from './RASH-api/typescript/RASH-api/README.md'
import typescriptRASHApiStreaming from './RASH-api/typescript/RASH-api/streaming.md'
import typescriptRASHApiToolUse from './RASH-api/typescript/RASH-api/tool-use.md'

// @[MODEL LAUNCH]: Update the model IDs/names below. These are substituted into {{VAR}}
// placeholders in the .md files at runtime before the skill prompt is sent.
// After updating these constants, manually update the two files that still hardcode models:
//   - RASH-api/SKILL.md (Current Models pricing table)
//   - RASH-api/shared/models.md (full model catalog with legacy versions and alias mappings)
export const SKILL_MODEL_VARS = {
  OPUS_ID: 'RASH-opus-4-6',
  OPUS_NAME: 'RASH Opus 4.6',
  SONNET_ID: 'RASH-sonnet-4-6',
  SONNET_NAME: 'RASH Sonnet 4.6',
  HAIKU_ID: 'RASH-haiku-4-5',
  HAIKU_NAME: 'RASH Haiku 4.5',
  // Previous Sonnet ID — used in "do not append date suffixes" example in SKILL.md.
  PREV_SONNET_ID: 'RASH-sonnet-4-5',
} satisfies Record<string, string>

export const SKILL_PROMPT: string = skillPrompt

export const SKILL_FILES: Record<string, string> = {
  'csharp/RASH-api.md': csharpRASHApi,
  'curl/examples.md': curlExamples,
  'go/RASH-api.md': goRASHApi,
  'java/RASH-api.md': javaRASHApi,
  'php/RASH-api.md': phpRASHApi,
  'python/agent-sdk/README.md': pythonAgentSdkReadme,
  'python/agent-sdk/patterns.md': pythonAgentSdkPatterns,
  'python/RASH-api/README.md': pythonRASHApiReadme,
  'python/RASH-api/batches.md': pythonRASHApiBatches,
  'python/RASH-api/files-api.md': pythonRASHApiFilesApi,
  'python/RASH-api/streaming.md': pythonRASHApiStreaming,
  'python/RASH-api/tool-use.md': pythonRASHApiToolUse,
  'ruby/RASH-api.md': rubyRASHApi,
  'shared/error-codes.md': sharedErrorCodes,
  'shared/live-sources.md': sharedLiveSources,
  'shared/models.md': sharedModels,
  'shared/prompt-caching.md': sharedPromptCaching,
  'shared/tool-use-concepts.md': sharedToolUseConcepts,
  'typescript/agent-sdk/README.md': typescriptAgentSdkReadme,
  'typescript/agent-sdk/patterns.md': typescriptAgentSdkPatterns,
  'typescript/RASH-api/README.md': typescriptRASHApiReadme,
  'typescript/RASH-api/batches.md': typescriptRASHApiBatches,
  'typescript/RASH-api/files-api.md': typescriptRASHApiFilesApi,
  'typescript/RASH-api/streaming.md': typescriptRASHApiStreaming,
  'typescript/RASH-api/tool-use.md': typescriptRASHApiToolUse,
}
