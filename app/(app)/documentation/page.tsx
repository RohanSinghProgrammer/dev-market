"use client"

import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Book, FileText, Search, Shield } from 'lucide-react';
import React, { useState } from 'react'

const Documentation = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('getting-started');

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <PageHeader
                title="Documentation"
                description="Comprehensive guides and references for DevMarket products"
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <div className="lg:col-span-1">
                    <Card className="sticky top-4">
                        <CardContent className="p-4">
                            <div className="space-y-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        className="pl-10"
                                        placeholder="Search docs..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                                <nav className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${activeTab === 'getting-started' ? 'bg-muted' : ''}`}
                                        onClick={() => handleTabChange('getting-started')}
                                    >
                                        <Book className="mr-2 h-4 w-4" />
                                        Getting Started
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${activeTab === 'api-reference' ? 'bg-muted' : ''}`}
                                        onClick={() => handleTabChange('api-reference')}
                                    >
                                        <FileText className="mr-2 h-4 w-4" />
                                        API Reference
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className={`w-full justify-start ${activeTab === 'security' ? 'bg-muted' : ''}`}
                                        onClick={() => handleTabChange('security')}
                                    >
                                        <Shield className="mr-2 h-4 w-4" />
                                        Security
                                    </Button>
                                </nav>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Main Content */}
                <div className="lg:col-span-3">
                    <Card>
                        <CardContent className="p-6">
                            <Tabs value={activeTab} onValueChange={handleTabChange}>
                                <TabsContent value="getting-started" className="space-y-6">
                                    <section>
                                        <h2 className="text-2xl font-bold mb-4">Quick Start Guide</h2>
                                        <p className="mb-4">Follow these steps to get started with DevMarket:</p>
                                        <ol className="list-decimal pl-6 space-y-2">
                                            <li>Create an account and verify your email</li>
                                            <li>Browse our marketplace for digital products</li>
                                            <li>Purchase and download your selected products</li>
                                            <li>Access documentation and integration guides</li>
                                        </ol>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold mb-4">Installation</h2>
                                        <div className="bg-muted p-4 rounded-lg">
                                            <code>npm install @devmarket/sdk</code>
                                        </div>
                                    </section>
                                </TabsContent>

                                <TabsContent value="api-reference">
                                    <section>
                                        <h2 className="text-2xl font-bold mb-4">API Reference</h2>
                                        <p>Comprehensive API documentation and endpoints.</p>
                                    </section>
                                </TabsContent>

                                <TabsContent value="security">
                                    <section>
                                        <h2 className="text-2xl font-bold mb-4">Security Guidelines</h2>
                                        <p>Learn about our security best practices and requirements.</p>
                                    </section>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Documentation
