import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import { Download } from 'lucide-react'
import React from 'react'

const Source = () => {
    return (
        <Card className="bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600">
            <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold dark:text-gray-200 text-gray-100">Source Code</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download ZIP
                        </Button>
                    </div>
                </div>
                <ScrollArea className="h-96 w-full rounded-md border border-gray-700 dark:border-gray-600 p-4">
                    {/* Source code preview would go here */}
                    <div className="font-mono text-sm text-gray-400 dark:text-gray-300">
                        <p>
                            {" // Source code preview... "}
                        </p>
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

export default Source