export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price)
}

export const randomNumber = (n) => {
  if (n <= 0) return -1

  const random = Math.random() * n
  return Math.round(random)
}

export const formatDate = (date) =>
  new Intl.DateTimeFormat('vi', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    weekday: 'long',
  }).format(new Date(date))
