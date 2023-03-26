import type { Metadata } from 'next'
import Container from '@/components/Container'

export const metadata:Metadata = {
  title: 'Tentang',
  description: 'Tentang BPHN Public Dashboard'
}
export default function AboutPage() {
  return (
    <Container>
      Tentang Kami
    </Container>
  )
}
