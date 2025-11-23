import { Shield, Mail, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">SafeSpace Africa</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building safer digital spaces for women and girls across Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground transition-smooth hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-smooth hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-smooth hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/digital-literacy" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Digital Literacy
                </Link>
              </li>
              <li>
                <Link to="/safety-tools" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Safety Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Support Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground transition-smooth hover:text-primary">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Get in Touch</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>contact@safespaceafrica.org</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Emergency Hotline: <br />
              <span className="font-semibold text-accent">+254 123 456 789</span>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SafeSpace Africa. All rights reserved. <br />
            <span className="text-xs">Supporting 16 Days of Activism Against Gender-Based Violence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
