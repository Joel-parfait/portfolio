// src/app/page.tsx
import Hero from '@/components/Hero';
import AboutAndSkills from '@/components/AboutAndSkills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* On pourrait mettre un Header ici plus tard */}
      <Hero />
      <AboutAndSkills />

      {/* Les autres sections viendront après */}
    </main>
  );
}
