import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  // Create SEO-friendly alt text
  const altText = `${product.title} - ${product.category} product available for purchase`;

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      itemScope 
      itemType="https://schema.org/Product"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={altText}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          itemProp="image"
        />
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide" itemProp="category">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
            <span className="text-sm font-medium" itemProp="ratingValue">
              {product.rating.rate}
            </span>
            <span className="text-xs text-muted-foreground" itemProp="reviewCount">
              ({product.rating.count})
            </span>
          </div>
        </div>
        <h3 
          className="mb-2 text-sm font-semibold line-clamp-2 text-foreground" 
          itemProp="name"
          title={product.title}
        >
          {product.title}
        </h3>
        <p 
          className="mb-3 text-xs text-muted-foreground line-clamp-2" 
          itemProp="description"
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span 
            className="text-lg font-bold text-foreground" 
            itemProp="offers" 
            itemScope 
            itemType="https://schema.org/Offer"
          >
            <meta itemProp="priceCurrency" content="USD" />
            <span itemProp="price" content={product.price.toString()}>
              {formatPrice(product.price)}
            </span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-sm hover:shadow-md transition-all duration-300"
          aria-label={`Add ${product.title} to cart`}
        >
          <ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
