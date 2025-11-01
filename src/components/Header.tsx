import { ShoppingBag, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import Cart from "./Cart";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
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
            <Button 
              variant="default" 
              size="sm"
              className="relative"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-4 w-4 sm:mr-2" aria-hidden="true" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <Badge 
                  variant="secondary"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {totalItems}
                </Badge>
              )}
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
    <Cart open={cartOpen} onOpenChange={setCartOpen} />
    </>
  );
};

export default Header;
