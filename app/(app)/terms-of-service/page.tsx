import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@radix-ui/react-select';
import React from 'react'

const TermsOfService = () => (
    <div className="container mx-auto px-4 py-8">
        <PageHeader
            title="Terms of Service"
            description="Please read these terms carefully before using DevMarket"
        />

        <div className="prose prose-gray dark:prose-invert max-w-none">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Account Terms</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You must be 18 years or older to use DevMarket</li>
                            <li>You are responsible for maintaining account security</li>
                            <li>Accurate and complete information is required</li>
                            <li>Account sharing is not permitted</li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Usage Terms</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Products must be used in accordance with their licenses</li>
                            <li>Reselling or redistribution is prohibited unless specified</li>
                            <li>Fair usage policies apply to API products</li>
                            <li>Support terms vary by product</li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Payment Terms</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>All prices are in USD unless otherwise specified</li>
                            <li>Refunds are subject to individual product policies</li>
                            <li>Subscription terms and cancellation policies</li>
                            <li>Payment processing and security measures</li>
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default TermsOfService