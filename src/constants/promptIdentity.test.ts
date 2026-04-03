import { afterEach, expect, test } from 'bun:test'

import { getSystemPrompt, DEFAULT_AGENT_PROMPT } from './prompts.js'
import { CLI_SYSPROMPT_PREFIXES, getCLISyspromptPrefix } from './system.js'
import { GENERAL_PURPOSE_AGENT } from '../tools/AgentTool/built-in/generalPurposeAgent.js'
import { EXPLORE_AGENT } from '../tools/AgentTool/built-in/exploreAgent.js'

const originalSimpleEnv = process.env.RASH_CODE_SIMPLE

afterEach(() => {
  process.env.RASH_CODE_SIMPLE = originalSimpleEnv
})

test('CLI identity prefixes describe RASHCODE instead of RASH Code', () => {
  expect(getCLISyspromptPrefix()).toContain('RASHCODE')
  expect(getCLISyspromptPrefix()).not.toContain("Anthropic's official CLI for RASH")

  for (const prefix of CLI_SYSPROMPT_PREFIXES) {
    expect(prefix).toContain('RASHCODE')
    expect(prefix).not.toContain("Anthropic's official CLI for RASH")
  }
})

test('simple mode identity describes RASHCODE instead of RASH Code', async () => {
  process.env.RASH_CODE_SIMPLE = '1'

  const prompt = await getSystemPrompt([], 'gpt-4o')

  expect(prompt[0]).toContain('RASHCODE')
  expect(prompt[0]).not.toContain("Anthropic's official CLI for RASH")
})

test('built-in agent prompts describe RASHCODE instead of RASH Code', () => {
  expect(DEFAULT_AGENT_PROMPT).toContain('RASHCODE')
  expect(DEFAULT_AGENT_PROMPT).not.toContain("Anthropic's official CLI for RASH")

  const generalPrompt = GENERAL_PURPOSE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(generalPrompt).toContain('RASHCODE')
  expect(generalPrompt).not.toContain("Anthropic's official CLI for RASH")

  const explorePrompt = EXPLORE_AGENT.getSystemPrompt({
    toolUseContext: { options: {} as never },
  })
  expect(explorePrompt).toContain('RASHCODE')
  expect(explorePrompt).not.toContain("Anthropic's official CLI for RASH")
})
