import Image from 'next/image'
import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container">
      <div class="mx-auto py-4 px-12">
      <HeroSection />
      </div>
    </main>
  )
}
