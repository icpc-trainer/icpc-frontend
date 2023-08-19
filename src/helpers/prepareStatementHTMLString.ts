export const prepareStatementHTMLString = (statement: string) => {
  const html = new DOMParser().parseFromString(statement, 'text/html')

  html.querySelectorAll('img').forEach(image => {
    image.src = image.src.replace(/^(.*?)(?=testsys)/g, 'https://contest.yandex.ru/')

    image.classList.add('problemDescriptionImg')
  })

  return html.body.innerHTML
}
