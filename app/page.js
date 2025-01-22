'use client'

import { useMemo } from 'react';
import HeroSection from '@/components/HomePage/HeroSection';
import AboutSection from '@/components/HomePage/AboutSection';
import BlogSection from '@/components/HomePage/BlogSection';
import PortfolioSection from '@/components/HomePage/PortfolioSection';
import FooterSection from '@/components/HomePage/FooterSection';
import MarqueeDevIcons from '@/components/Animation/MarqueeDevIcons';
import SmoothScroll from '@/components/Animation/SmoothScroll';
import ShowWhenInView from '@/components/Animation/ShowWhenInView';

export default function Home() {
  const sections = useMemo(() => [
    { component: HeroSection },
    { component: AboutSection },
    { component: MarqueeDevIcons },
    { component: BlogSection },
    { component: PortfolioSection },
    { component: FooterSection },
  ], [])

  return (
    <SmoothScroll>
      <div className="container sm:mt-32 mx-auto py-4 px-4">
        { sections.map(({ component: Component }, index) => (
          <ShowWhenInView key={ index } delay={ index * 0.1 }>
            <Component />
          </ShowWhenInView>
        )) }
      </div>
    </SmoothScroll>
  );
}
