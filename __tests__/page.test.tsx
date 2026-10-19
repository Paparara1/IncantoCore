import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders the title Inkanto', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { level: 1, name: /inkanto/i })).toBeInTheDocument()
  })

  it('renders the subtitle and description', () => {
    render(<Home />)
    expect(screen.getByText(/Twój osobisty AI — zawsze gotowy/i)).toBeInTheDocument()
    expect(screen.getByText(/Hej Paula 👋 Tutaj zawsze mnie znajdziesz/i)).toBeInTheDocument()
  })

  it('renders the CTA link with correct href and attributes', () => {
    render(<Home />)
    const ctaLink = screen.getByRole('link', { name: /porozmawiaj z inkanto/i })
    expect(ctaLink).toBeInTheDocument()
    expect(ctaLink).toHaveAttribute('href', 'https://app.base44.com/superagent/69b21b362d0b95bf51062737')
    expect(ctaLink).toHaveAttribute('target', '_blank')
    expect(ctaLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the footer note', () => {
    render(<Home />)
    expect(screen.getByText(/ojjja\.site · powered by Base44/i)).toBeInTheDocument()
  })
})
