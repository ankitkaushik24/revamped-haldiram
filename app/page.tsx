import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCategories from '@/components/ProductCategories';
import FeaturedProducts from '@/components/FeaturedProducts';
import StoreLocator from '@/components/StoreLocator';
import RecipeSection from '@/components/RecipeSection';
import CorporateGifting from '@/components/CorporateGifting';
import NewsAndMedia from '@/components/NewsAndMedia';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <FeaturedProducts />
        <StoreLocator />
        <RecipeSection />
        <CorporateGifting />
        <NewsAndMedia />
        <About />
      </main>
      <Footer />
    </div>
  );
}