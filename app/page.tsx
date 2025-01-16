import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <Code2 className="h-16 w-16 text-primary mb-6" />
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Digital Products Marketplace
            </h1>
            <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
              Discover and purchase high-quality digital products including APIs, ML models,
              automation scripts, and complete applications.
            </p>
            <div className="mt-10 flex gap-4">
              <Link href="/products">
                <Button size="lg">Browse Products</Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg">
                  View Categories
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose DevMarket?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Curated Quality</h3>
              <p className="text-muted-foreground">
                Every product is thoroughly reviewed to ensure the highest quality
                and reliability.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-muted-foreground">
                Download your purchases immediately and start using them in your
                projects.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-primary/10 p-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-muted-foreground">
                Your transactions and data are protected with enterprise-grade
                security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who trust DevMarket for their digital
            product needs.
          </p>
          <Link href="/signup">
            <Button size="lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}