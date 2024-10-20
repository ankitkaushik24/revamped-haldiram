import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative h-[600px] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        alt="Assorted Indian snacks"
        layout="fill"
        objectFit="cover"
        className="brightness-50"
      />
      <div className="container mx-auto px-4 relative z-10 text-white">
        <h1 className="text-5xl font-bold mb-4">Taste the Authentic Flavors of India</h1>
        <p className="text-xl mb-8">Discover our wide range of delicious snacks and sweets</p>
        <Button size="lg">Shop Now</Button>
      </div>
    </section>
  );
};

export default Hero;