import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const newsItems = [
  { id: 1, title: 'Haldiram\'s Expands to International Markets', date: '2023-05-15' },
  { id: 2, title: 'New Product Launch: Fusion Snacks Collection', date: '2023-04-22' },
  { id: 3, title: 'Haldiram\'s Wins "Best Indian Snack Brand" Award', date: '2023-03-10' },
];

const NewsAndMedia = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">News and Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {newsItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.date}</p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg">View All News</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsAndMedia;