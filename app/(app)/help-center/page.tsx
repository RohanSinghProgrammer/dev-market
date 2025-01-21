"use client"

import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion';
import { Search } from 'lucide-react';
import React, { useState } from 'react'

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      category: "Account & Billing",
      questions: [
        {
          q: "How do I reset my password?",
          a: "You can reset your password by clicking the 'Forgot Password' link on the login page. Follow the instructions sent to your email."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept major credit cards, PayPal, and bank transfers for enterprise customers."
        }
      ]
    },
    {
      category: "Products & Services",
      questions: [
        {
          q: "How do I integrate an API?",
          a: "Each API comes with detailed documentation, code samples, and SDKs. Visit the product's documentation page for integration guides."
        },
        {
          q: "What if a product doesn't work as expected?",
          a: "Contact our support team immediately. We offer a 30-day warranty on all products and will help resolve any issues."
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        title="Help Center"
        description="Find answers to common questions and get support"
      />

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            className="pl-10"
            placeholder="Search help articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {faqCategories.map((category, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {category.questions.map((item, qIdx) => (
                  <AccordionItem key={qIdx} value={`item-${idx}-${qIdx}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent className='text-gray-700 dark:text-gray-400'>{item.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        ))}

        <Card>
          <CardHeader>
            <CardTitle>Still need help?</CardTitle>
            <CardDescription>Our support team is here to assist you</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button>Contact Support</Button>
            <Button variant="outline">Visit Community Forum</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};


export default HelpCenter