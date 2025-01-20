import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package } from 'lucide-react'

const Orders = () => {
    return (
        <div className="grid gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>View and track your orders</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Example Order */}
                        <div className="flex items-center justify-between p-4 border rounded">
                            <div className="flex items-center gap-4">
                                <Package className="h-8 w-8 text-muted-foreground" />
                                <div>
                                    <p className="font-medium">Order #12345</p>
                                    <p className="text-sm text-muted-foreground">
                                        2 items • $158.98
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline">View Details</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Orders
