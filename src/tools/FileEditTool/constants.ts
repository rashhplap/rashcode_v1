// In its own file to avoid circular dependencies
export const FILE_EDIT_TOOL_NAME = 'Edit'

// Permission pattern for granting session-level access to the project's .RASH/ folder
export const RASH_FOLDER_PERMISSION_PATTERN = '/.RASH/**'

// Permission pattern for granting session-level access to the global ~/.RASH/ folder
export const GLOBAL_RASH_FOLDER_PERMISSION_PATTERN = '~/.RASH/**'

export const FILE_UNEXPECTEDLY_MODIFIED_ERROR =
  'File has been unexpectedly modified. Read it again before attempting to write it.'
