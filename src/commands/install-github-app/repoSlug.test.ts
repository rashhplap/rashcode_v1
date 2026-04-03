import assert from 'node:assert/strict'
import test from 'node:test'

import { extractGitHubRepoSlug } from './repoSlug.ts'

test('keeps owner/repo input as-is', () => {
  assert.equal(extractGitHubRepoSlug('RASHHPLAP/RASHCODE'), 'RASHHPLAP/RASHCODE')
})

test('extracts slug from https GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('https://github.com/RASHHPLAP/RASHCODE'),
    'RASHHPLAP/RASHCODE',
  )
  assert.equal(
    extractGitHubRepoSlug('https://www.github.com/RASHHPLAP/RASHCODE.git'),
    'RASHHPLAP/RASHCODE',
  )
})

test('extracts slug from ssh GitHub URLs', () => {
  assert.equal(
    extractGitHubRepoSlug('git@github.com:RASHHPLAP/RASHCODE.git'),
    'RASHHPLAP/RASHCODE',
  )
  assert.equal(
    extractGitHubRepoSlug('ssh://git@github.com/RASHHPLAP/RASHCODE'),
    'RASHHPLAP/RASHCODE',
  )
})

test('rejects malformed or non-GitHub URLs', () => {
  assert.equal(extractGitHubRepoSlug('https://gitlab.com/RASHHPLAP/RASHCODE'), null)
  assert.equal(extractGitHubRepoSlug('https://github.com/RASHHPLAP'), null)
  assert.equal(extractGitHubRepoSlug('not actually github.com/RASHHPLAP/RASHCODE'), null)
  assert.equal(
    extractGitHubRepoSlug('https://evil.example/?next=github.com/RASHHPLAP/RASHCODE'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://github.com.evil.example/RASHHPLAP/RASHCODE'),
    null,
  )
  assert.equal(
    extractGitHubRepoSlug('https://example.com/github.com/RASHHPLAP/RASHCODE'),
    null,
  )
})
