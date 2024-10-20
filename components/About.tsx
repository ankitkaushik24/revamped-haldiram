import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Haldiram&apos;s</h2>
          <p className="text-lg mb-8">
            For over 80 years, Haldiram&apos;s has been crafting authentic Indian snacks and sweets,
            bringing the rich flavors of India to homes around the world. Our commitment to quality
            and tradition ensures that every bite is a delightful experience.
          </p>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;