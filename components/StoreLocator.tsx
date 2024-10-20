"use client"

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const StoreLocator = () => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically make an API call to find stores near the entered location
    console.log('Searching for stores near:', location);
  };

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Find a Store</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
            <Input
              type="text"
              placeholder="Enter your location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="flex-grow"
            />
            <Button type="submit">Search</Button>
          </form>
          <Card>
            <CardContent className="p-4">
              <p className="text-center text-muted-foreground">
                Enter your location to find the nearest Haldiram's store.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;