import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CorporateGifting = () => {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Corporate Gifting</h2>
        <Card className="bg-background text-foreground max-w-2xl mx-auto">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Perfect for Every Occasion</h3>
            <p className="mb-6">
              Delight your clients, employees, and business partners with Haldiram's 
              exquisite range of corporate gifts. From traditional sweets to modern 
              snack assortments, we have the perfect gift for every occasion.
            </p>
            <div className="text-center">
              <Button size="lg">Explore Corporate Gifts</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CorporateGifting;