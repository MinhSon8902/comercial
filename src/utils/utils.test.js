import { it } from 'vitest'
import { formatDate, formatPrice } from './helper'

it('formatPrice should format positive price correctly', () => {
  expect(formatPrice(1000000)).toBe('1.000.000 ₫')
})

it('formatPrice should format negative price correctly', () => {
  expect(Object.is(formatPrice(-500000), '-500.000 ₫')).toBeTruthy()
})

it('formatPrice should format zero price correctly', () => {
  expect(Object.is(formatPrice(0), '0 ₫')).toBeTruthy()
})

it('formatDate should return a formatted date string for a given date', () => {
  const date = new Date('2022-12-15T03:24:00')
  const formattedDate = formatDate(date)
  expect(formattedDate).toBe('Thứ Năm, 15 tháng 12, 2022')
})

it('formatDate should return a formatted date string when a date object is passed', () => {
  const date = new Date('2022-10-01T12:00:00')
  const formattedDate = formatDate(date)
  expect(formattedDate).toBe('Thứ Bảy, 1 tháng 10, 2022')
})
