"use client"

import React from 'react';
import { useState } from 'react';
import { CreditCard, Package, AlertCircle } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useCart } from '@/lib/store';

const CheckoutPage = () => {
    const [loading, setLoading] = useState(false);
    const { items } = useCart();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);
        // Simulate payment processing
        setTimeout(() => setLoading(false), 2000);
    };

    const cartItems = items;

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;

    return (
        <div className='container mx-auto py-8'>
            <div className="min-h-screen bg-background dark:bg-dark-background p-4 md:p-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-3xl font-bold mb-8 dark:text-white">Checkout</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Checkout Form */}
                        <div className="lg:col-span-2">
                            <Card className="dark:bg-dark-card-background">
                                <CardHeader>
                                    <CardTitle className="dark:text-white">Payment Information</CardTitle>
                                    <CardDescription className="dark:text-muted-foreground">Complete your purchase securely</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="credit-card" className="w-full">
                                        <TabsList className="grid w-full grid-cols-2">
                                            <TabsTrigger value="credit-card" className="dark:text-white">Credit Card</TabsTrigger>
                                            <TabsTrigger value="paypal" className="dark:text-white">PayPal</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="credit-card">
                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-4">
                                                    <div>
                                                        <Label htmlFor="cardName" className="dark:text-white">Name on Card</Label>
                                                        <Input id="cardName" placeholder="John Doe" required className="dark:bg-dark-input-background dark:text-white" />
                                                    </div>

                                                    <div>
                                                        <Label htmlFor="cardNumber" className="dark:text-white">Card Number</Label>
                                                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required className="dark:bg-dark-input-background dark:text-white" />
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor="expiry" className="dark:text-white">Expiry Date</Label>
                                                            <Input id="expiry" placeholder="MM/YY" required className="dark:bg-dark-input-background dark:text-white" />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor="cvc" className="dark:text-white">CVC</Label>
                                                            <Input id="cvc" placeholder="123" required className="dark:bg-dark-input-background dark:text-white" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <Alert>
                                                    <AlertCircle className="h-4 w-4" />
                                                    <AlertDescription className="dark:text-white">
                                                        Your payment information is encrypted and secure
                                                    </AlertDescription>
                                                </Alert>
                                            </form>
                                        </TabsContent>

                                        <TabsContent value="paypal">
                                            <div className="text-center p-8">
                                                <Button variant="outline" className="w-full dark:text-white">
                                                    Continue with PayPal
                                                </Button>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                                <CardFooter>
                                    <Button
                                        className="w-full"
                                        size="lg"
                                        disabled={loading}
                                        onClick={handleSubmit}
                                    >
                                        {loading ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <Card className="dark:bg-dark-card-background">
                                <CardHeader>
                                    <CardTitle className="dark:text-white">Order Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="space-y-2">
                                            <div className="flex justify-between">
                                                <span className="font-medium dark:text-white">{item.name}</span>
                                                <span>₹{item.price.toFixed(2)}</span>
                                            </div>
                                            <p className="text-sm dark:text-muted-foreground">{item?.description}</p>
                                            {index !== cartItems.length - 1 && <Separator className="my-4" />}
                                        </div>
                                    ))}

                                    <div className="space-y-2 pt-4">
                                        <div className="flex justify-between">
                                            <span className="dark:text-white">Subtotal</span>
                                            <span>₹{subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="dark:text-white">Tax</span>
                                            <span>₹{tax.toFixed(2)}</span>
                                        </div>
                                        <Separator className="my-2" />
                                        <div className="flex justify-between font-bold">
                                            <span className="dark:text-white">Total</span>
                                            <span>₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;