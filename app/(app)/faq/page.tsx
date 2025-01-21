"use client";

import { useMemo, useState } from "react";
import {
    Search,
    Filter,
    ChevronRight,
    MessageSquare,
} from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const FAQPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const faqData = useMemo(
        () => [
            {
                category: "General",
                questions: [
                    {
                        q: "What is DevMarket?",
                        a: `DevMarket is a premier marketplace for high-quality digital products including APIs, ML models, automation scripts, and complete applications. We connect developers and businesses with reliable, production-ready solutions.`,
                        tags: ["platform", "overview"],
                    },
                    {
                        q: "How do I get started with DevMarket?",
                        a: `Getting started is easy: 1. Create an account 2. Browse our marketplace 3. Choose your desired products 4. Complete the purchase 5. Access your products through your dashboard`,
                        tags: ["getting started", "account"],
                    },
                ],
            },
            {
                category: "Products",
                questions: [
                    {
                        q: "What types of products are available on DevMarket?",
                        a: `DevMarket offers a wide range of digital products including: REST APIs, GraphQL APIs, Machine Learning Models, Data Processing Scripts, Automation Tools, Web Applications, Mobile Apps, and Enterprise Solutions.`,
                        tags: ["products", "features"],
                    },
                    {
                        q: "How do I know if a product is right for my needs?",
                        a: `Each product includes detailed documentation, use cases, technical specifications, and performance metrics. You can also preview demos, read reviews from other customers, and contact the seller directly with specific questions.`,
                        tags: ["products", "support"],
                    },
                ],
            },
            {
                category: "Pricing & Billing",
                questions: [
                    {
                        q: "What payment methods do you accept?",
                        a: `We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise customers. All transactions are processed securely through our payment partners.`,
                        tags: ["payment", "billing"],
                    },
                    {
                        q: "Do you offer refunds?",
                        a: `Yes, we offer a 30-day money-back guarantee on most products. If you're not satisfied with your purchase, contact our support team. Note that some products may have specific refund policies.`,
                        tags: ["refunds", "billing"],
                    },
                ],
            },
            {
                category: "Technical Support",
                questions: [
                    {
                        q: "How do I get technical support for products?",
                        a: `Technical support is available through multiple channels: 1. Product documentation 2. Community forums 3. Direct seller support 4. DevMarket support team. Response times vary based on your support tier.`,
                        tags: ["support", "technical"],
                    },
                    {
                        q: "What if I encounter integration issues?",
                        a: `For integration issues: 1. Check the implementation guide 2. Review common troubleshooting steps 3. Search the community forums 4. Contact technical support with specific error details`,
                        tags: ["integration", "technical"],
                    },
                ],
            },
        ],
        []
    );

    const filteredFAQs = useMemo(() => {
        return faqData
            .filter((category) =>
                selectedCategory === "all" ||
                category.category.toLowerCase() === selectedCategory.toLowerCase()
            )
            .map((category) => ({
                ...category,
                questions: category.questions.filter(
                    (q) =>
                        q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.a.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        q.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
                ),
            }))
            .filter((category) => category.questions.length > 0);
    }, [faqData, searchQuery, selectedCategory]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="min-h-screen bg-background p-4 md:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            {`Find answers to common questions about DevMarket's products, services, and features.
                        Can't find what you're looking for? Contact our support team.`}
                        </p>
                    </div>

                    {/* Search and Filter */}
                    <Card>
                        <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                    <Input
                                        className="pl-10"
                                        placeholder="Search FAQs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                    <SelectTrigger className="w-full md:w-[200px]">
                                        <Filter className="h-4 w-4 mr-2" />
                                        <SelectValue placeholder="Filter by category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        {faqData.map((category, idx) => (
                                            <SelectItem key={idx} value={category.category.toLowerCase()}>
                                                {category.category}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </CardContent>
                    </Card>

                    {/* FAQ Content */}
                    <div className="space-y-6">
                        {filteredFAQs.map((category, categoryIdx) => (
                            <Card key={categoryIdx}>
                                <CardHeader>
                                    <CardTitle>{category.category}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Accordion type="single" collapsible className="w-full">
                                        {category.questions.map((item, questionIdx) => (
                                            <AccordionItem
                                                key={questionIdx}
                                                value={`item-${categoryIdx}-${questionIdx}`}
                                            >
                                                <AccordionTrigger className="text-left">
                                                    {item.q}
                                                </AccordionTrigger>
                                                <AccordionContent className="space-y-4">
                                                    <p>{item.a}</p>
                                                    <div className="flex gap-2 flex-wrap">
                                                        {item.tags.map((tag, tagIdx) => (
                                                            <Badge key={tagIdx} variant="secondary">
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Contact Support */}
                    <Card className="bg-primary/5 border-primary/10">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <MessageSquare className="h-5 w-5" />
                                Still have questions?
                            </CardTitle>
                            <CardDescription>
                                Our support team is here to help you with any questions or concerns.
                            </CardDescription>
                        </CardHeader>
                        <CardFooter className="flex flex-col sm:flex-row gap-4">
                            <Button className="w-full sm:w-auto">Contact Support</Button>
                            <Button variant="outline" className="w-full sm:w-auto">
                                Visit Community Forum
                                <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
