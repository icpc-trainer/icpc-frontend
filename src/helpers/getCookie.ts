export const getCookie = (name: string) => {
  const cookieArr = document.cookie.split(';')

  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split('=')

    if (name === cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1])
    }
  }

  // Return null if the cookie by name does not exist
  return null
}
