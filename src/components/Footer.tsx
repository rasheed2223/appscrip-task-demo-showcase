import { ShoppingBag, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingBag className="h-8 w-8 text-accent" aria-hidden="true" />
              <span className="text-xl font-bold text-foreground">ShopHub</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted destination for premium quality products with exceptional service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#categories" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#shipping" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#returns" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#support" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <address className="space-y-3 not-italic">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="mailto:support@shophub.com" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  support@shophub.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <a 
                  href="tel:+1234567890" 
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground">
                  123 Shopping Street, NY 10001
                </span>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ShopHub. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
