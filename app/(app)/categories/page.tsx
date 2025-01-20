import { Card, CardContent } from "@/components/ui/card";
import { Figma, Compass, TabletSmartphone, Brain } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        id: 1,
        name: "UI/UX Design",
        icon: Figma,
        description: "User interfaces, user experience, and design resources",
        itemCount: 150,
    },
    {
        id: 2,
        name: "Web Applications",
        icon: Compass,
        description: "Frontend, backend, and full-stack web development tools and templates",
        itemCount: 80,
    },
    {
        id: 3,
        name: "Mobile Applications",
        icon: TabletSmartphone,
        description: "iOS, Android, and cross-platform mobile development solutions",
        itemCount: 45,
    },
    {
        id: 4,
        name: "AI/ML Models",
        icon: Brain,
        description: "AI/ML Models, trained for specific tasks",
        itemCount: 45,
    },
];

export default function CategoriesPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <Link key={category.id} href={`/categories/${category.id}`}>
                            <Card className="hover:shadow-lg transition-shadow h-full">
                                <CardContent className="p-6 h-full flex flex-col">
                                    <Icon className="h-12 w-12 mb-4" />
                                    <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
                                    <div className="text-muted-foreground mb-2 flex-1">{category.description}</div>
                                    <p className="text-sm">{category.itemCount} items</p>
                                </CardContent>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}