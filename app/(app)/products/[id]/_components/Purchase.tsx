"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useCart } from '@/lib/store';
import React from 'react'

type Props = {
    product: any;
    params: any;
}

const Purchase = ({ product, params }: Props) => {
    const { addItem } = useCart();
    return (
        <Card className="w-full md:w-80 shrink-0 bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
            <CardContent className="p-6">
                <div className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">${product.price}</div>
                <div className="space-y-4">
                    <Button className="w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white" size="lg">
                        Purchase Now
                    </Button>
                    <Button onClick={() => addItem({ ...product, id: params.id, quantity: 1 })} variant="outline" className="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" size="lg">
                        Add To Cart
                    </Button>
                    <Button variant="outline" className="w-full border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100" size="lg">
                        Live Demo
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default Purchase