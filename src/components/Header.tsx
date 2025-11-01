import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80" aria-label="ShopHub home">
              <ShoppingBag className="h-8 w-8 text-accent" aria-hidden="true" />
              <span className="text-xl font-bold text-foreground">ShopHub</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#products" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              Products
            </a>
            <a href="#categories" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              Categories
            </a>
            <a href="#about" className="text-sm font-medium text-foreground transition-colors hover:text-accent">
              About
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Search products">
              <Search className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping cart">
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 border-t border-border">
            <a
              href="#products"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#categories"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#about"
              className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
