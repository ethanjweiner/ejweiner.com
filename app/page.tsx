import SeamlessSection from '@/components/SeamlessSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 sm:px-6 md:max-w-4xl ">
      <HeroSection />
      <SeamlessSection />
      <ProjectsSection />
    </main>
  );
}
