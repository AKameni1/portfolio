export const validateString = (
  value: unknown,
  maxLength: number,
): Readonly<boolean> => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false
  }
  return true
}

export const getErrorMessage = (error: unknown): Readonly<string> => {
  let message: string

  if (error instanceof Error) {
    message = error.message
  } else if (
    error &&
    typeof error === 'object' &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    message = error.message
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong'
  }

  return message
}
