"use client"

import Link from 'next/link';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './mode-toggle';

const Header = () => {
  return (
    <header className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Haldiram&apos;s
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link href="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
                <Link href="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
                <Link href="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
                <Link href="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;