import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import React from 'react'

const Documentation = () => {
    return (
        <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
                <div className="prose max-w-none text-gray-400">
                    <h2 className="text-xl font-semibold mb-4 text-gray-100">Documentation</h2>
                    <p className="mb-4">
                        Complete documentation including installation guides, API references,
                        and best practices for implementing the image recognition system.
                    </p>
                    <ScrollArea className="h-96 w-full rounded-md border border-gray-700 p-4">
                        {/* Documentation content would go here */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-100">Quick Start</h3>
                            <p>Installation instructions and basic setup...</p>

                            <h3 className="text-lg font-semibold text-gray-100">API Reference</h3>
                            <p>Detailed API documentation and examples...</p>

                            <h3 className="text-lg font-semibold text-gray-100">Integration Guide</h3>
                            <p>Step-by-step integration instructions...</p>
                        </div>
                    </ScrollArea>
                </div>
            </CardContent>
        </Card>
    )
}

export default Documentation