import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Github,
    Globe,
    Calendar,
    Users,
    Star,
    MessageSquare,
    Share2,
    Download,
    Code2
} from "lucide-react";
import { fetchProducts } from '../actions/product.actions';
import Overview from './_components/Overview';
import Documentation from './_components/Documentation';
import Source from './_components/Source';
import Support from './_components/Support';

interface PageProps {
    params: {
        id: string;
    };
}


const ProductDetailsPage = ({ params }: PageProps | any) => {
    const product = {
        name: "AI Image Recognition API",
        description: "Advanced machine learning model for real-time image recognition with 98% accuracy. Built with TensorFlow and optimized for edge devices.",
        price: 499,
        author: {
            name: "Sarah Chen",
            avatar: "/api/placeholder/100/100",
            username: "sarahchen"
        },
        stats: {
            downloads: 1234,
            stars: 456,
            users: 789
        },
        tags: ["AI/ML", "Computer Vision", "API", "TensorFlow"],
        lastUpdated: "2025-01-15",
        features: [
            "Pre-trained on 10M+ images",
            "REST API with detailed documentation",
            "Browser SDK included",
            "Edge device optimization",
            "24/7 support"
        ]
    };
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
            {/* Hero Section */}
            <div className="bg-gray-200 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-4">
                                {product.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-sm bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">{product.name}</h1>
                            <p className="text-gray-700 dark:text-gray-400 mb-6">{product.description}</p>

                            <div className="flex items-center gap-4 mb-6">
                                <Avatar>
                                    <AvatarImage src={product.author.avatar} />
                                    <AvatarFallback>{product.author.name[0]}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-gray-100">{product.author.name}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-500">@{product.author.username}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    <span>Updated {product.lastUpdated}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4" />
                                    <span>{product.stats.stars} stars</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    <span>{product.stats.users} happy clients</span>
                                </div>
                            </div>
                        </div>

                        <Card className="w-full md:w-80 shrink-0 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                            <CardContent className="p-6">
                                <div className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">${product.price}</div>
                                <div className="space-y-4">
                                    <Button className="w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white" size="lg">
                                        Purchase Now
                                    </Button>
                                    <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" size="lg">
                                        Add To Cart
                                    </Button>
                                    <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" size="lg">
                                        Live Demo
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="container mx-auto px-4 py-8">
                <Tabs defaultValue="overview" className="space-y-6">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="documentation">Documentation</TabsTrigger>
                        <TabsTrigger value="source">Source Code</TabsTrigger>
                        <TabsTrigger value="support">Support</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">
                        <Overview product={product} />
                    </TabsContent>

                    <TabsContent value="documentation">
                        <Documentation />
                    </TabsContent>

                    <TabsContent value="source">
                        <Source />
                    </TabsContent>

                    <TabsContent value="support">
                        <Support />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ProductDetailsPage;

export async function generateStaticParams() {
    // Fetch your data here 
    const products = await fetchProducts(); // Return an array of params 
    return products.map((product: { id: string }) => ({ id: product.id.toString() }));
}