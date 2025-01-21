import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import React from 'react'

const PrivacyPolicy = () => (
    <div className="container mx-auto px-4 py-8">
        <PageHeader
            title="Privacy Policy"
            description="Learn how we collect, use, and protect your personal information at DevMarket"
        />
        <div className="prose prose-gray dark:prose-invert max-w-none">
            <Card>
                <CardContent className="p-6 space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
                        <p>We collect information that you provide directly to us, including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Account information (name, email, password)</li>
                            <li>Payment and billing information</li>
                            <li>Usage data and analytics</li>
                            <li>Communication preferences</li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                        <p>Your information helps us provide and improve our services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Process transactions and deliver products</li>
                            <li>Provide customer support and communicate updates</li>
                            <li>Improve our platform and user experience</li>
                            <li>Ensure platform security and prevent fraud</li>
                        </ul>
                    </section>

                    <Separator />

                    <section>
                        <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                        <p>We implement industry-standard security measures to protect your data:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Encryption of sensitive information</li>
                            <li>Regular security audits and updates</li>
                            <li>Strict access controls and monitoring</li>
                            <li>Compliance with data protection regulations</li>
                        </ul>
                    </section>
                </CardContent>
            </Card>
        </div>
    </div>
);

export default PrivacyPolicy