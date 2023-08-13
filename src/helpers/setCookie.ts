export const setCookie = (name: string, value: string, expiresIn?: string) => {
  let expires = ''
  if (expiresIn) {
    const date = new Date()
    date.setTime(date.getTime() + Number(expiresIn))
    expires = '; expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + encodeURIComponent(value) + expires + '; path=/'
}
