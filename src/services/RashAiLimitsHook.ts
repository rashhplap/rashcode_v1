import { useEffect, useState } from 'react'
import {
  type RASHAILimits,
  currentLimits,
  statusListeners,
} from './RASHAiLimits.js'

export function useRASHAiLimits(): RASHAILimits {
  const [limits, setLimits] = useState<RASHAILimits>({ ...currentLimits })

  useEffect(() => {
    const listener = (newLimits: RASHAILimits) => {
      setLimits({ ...newLimits })
    }
    statusListeners.add(listener)

    return () => {
      statusListeners.delete(listener)
    }
  }, [])

  return limits
}
