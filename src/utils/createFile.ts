export const createFile = (code: string) => {
  const blob = new Blob([code], { type: 'text/plain' })
  const formData = new FormData()
  formData.append('file', blob, 'code.txt')
  return formData
}
