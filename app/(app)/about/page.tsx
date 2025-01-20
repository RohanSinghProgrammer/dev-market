import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Globe, Heart } from "lucide-react";
import AboutImg from "@/assets/about-img.jpeg";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">About DevMarket</h1>
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={AboutImg}
            alt="DevMarket"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg mb-6">DevMarket was founded in 2025 with a simple mission: to empower developers by connecting them with a thriving marketplace for their software creations. We believe that every developer deserves to monetize their talent and reach a wider audience for their unique software solutions.
          </p>
          <p className="text-lg mb-6">
            DevMarket provides a platform for independent developers and freelancers to showcase, sell, and distribute their software directly to businesses and individuals. Our platform is designed to be user-friendly and efficient, making it easy for developers to list their products, manage sales, and grow their businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Award className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                We carefully select every item in our collection to ensure the
                highest quality standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Users className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do, from
                selection to service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Globe className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">
                We ship to over 100 countries, bringing style to fashion lovers
                worldwide.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Heart className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">
                {`We're committed to reducing our environmental impact through sustainable practices.`}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
