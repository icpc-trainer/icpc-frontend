export const prepareStatementHTMLString = (statement: string) => {
  const html = new DOMParser().parseFromString(statement, 'text/html')

  html.querySelectorAll('img').forEach(image => {
    image.src = `https://contest.yandex.ru${image.src}`

    image.classList.add('problemDescriptionImg')
  })

  return html.body.innerHTML
}
