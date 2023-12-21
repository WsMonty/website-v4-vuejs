export function dateFormatter(dateString: string) {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`
}

export function getTime(dateString: string) {
  const date = new Date(dateString)

  const hour = date.getHours()
  const min = date.getMinutes()

  return `${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`
}
