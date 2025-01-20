import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Separator } from '@radix-ui/react-select'
import { Box, Clock, Package, Truck } from 'lucide-react'
import React from 'react'

const OrderDetailsDialog = () => {
    // Demo order data
    const orderDetails = {
        orderId: "ORD-2025-001",
        date: "January 20, 2025",
        status: "Delivered",
        items: [
            {
                name: "AI Image Recognition API",
                price: 499,
                license: "Enterprise"
            }
        ],
        total: 499,
        deliveryEmail: "user@example.com"
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Order Summary */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold">Order #{orderDetails.orderId}</h3>
                            <Badge variant="outline">{orderDetails.status}</Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2" />
                            {orderDetails.date}
                        </div>
                    </div>

                    <Separator />

                    {/* Order Items */}
                    <ScrollArea className="max-h-[400px]">
                        <div className="space-y-4">
                            {orderDetails.items.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-4">
                                        <div className="flex justify-between">
                                            <div>
                                                <h4 className="font-medium">{item.name}</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    License: {item.license}
                                                </p>
                                            </div>
                                            <p className="font-semibold">${item.price}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </ScrollArea>

                    {/* Order Timeline */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Order Timeline</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Package className="w-5 h-5 text-green-500" />
                                <div>
                                    <p className="font-medium">Order Confirmed</p>
                                    <p className="text-sm text-muted-foreground">January 20, 2025, 10:00 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Box className="w-5 h-5 text-green-500" />
                                <div>
                                    <p className="font-medium">License Generated</p>
                                    <p className="text-sm text-muted-foreground">January 20, 2025, 10:05 AM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Truck className="w-5 h-5 text-green-500" />
                                <div>
                                    <p className="font-medium">Delivered to Email</p>
                                    <p className="text-sm text-muted-foreground">January 20, 2025, 10:10 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h4 className="font-semibold">Delivery Details</h4>
                        <p className="text-sm text-muted-foreground">
                            License and documentation delivered to: {orderDetails.deliveryEmail}
                        </p>
                    </div>

                    <Separator />

                    {/* Order Total */}
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span>Total</span>
                            <span className="font-semibold">${orderDetails.total}</span>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default OrderDetailsDialog