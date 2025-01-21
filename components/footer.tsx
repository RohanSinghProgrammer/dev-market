import { Code2 } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-6 w-6" />
              <span className="font-bold">DevMarket</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Your one-stop shop for developer resources and digital products.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Products</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/categories/web-apis" className="text-muted-foreground hover:text-foreground">
                  Web APIs
                </Link>
              </li>
              <li>
                <Link href="/categories/ml-models" className="text-muted-foreground hover:text-foreground">
                  ML/AI Models
                </Link>
              </li>
              <li>
                <Link href="/categories/scripts" className="text-muted-foreground hover:text-foreground">
                  Automation Scripts
                </Link>
              </li>
              <li>
                <Link href="/categories/applications" className="text-muted-foreground hover:text-foreground">
                  Applications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/help-center" className="text-muted-foreground hover:text-foreground">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-foreground">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}