import { Card, CardContent } from '@/components/ui/card'
import { Code2 } from 'lucide-react'
import React from 'react'

const Overview = ({ product }: any) => {
    return (
        <>
            <Card className="bg-gray-900 border border-gray-700 dark:bg-gray-800 dark:border-gray-600">
                <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-100 dark:text-gray-200">Key Features</h2>
                    <ul className="space-y-3">
                        {product.features.map((feature: any, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-gray-400 dark:text-gray-300">
                                <Code2 className="w-5 h-5 mt-0.5 text-blue-500 dark:text-blue-400" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gray-900 border border-gray-700 dark:bg-gray-800 dark:border-gray-600">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-100 dark:text-gray-200">Technical Requirements</h3>
                        <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300">
                            <li>Node.js 18+ / Python 3.8+</li>
                            <li>4GB RAM minimum</li>
                            <li>REST API endpoints</li>
                            <li>HTTPS support</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-gray-900 border border-gray-700 dark:bg-gray-800 dark:border-gray-600">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4 text-gray-100 dark:text-gray-200">Included Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400 dark:text-gray-300">
                            <li>Source code access</li>
                            <li>API documentation</li>
                            <li>Integration guides</li>
                            <li>Sample applications</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default Overview
