import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Code2, Globe, MessageSquare, Share2 } from 'lucide-react'
import React from 'react'

const Support = () => {
    return (
        <Card className="bg-gray-800 border border-gray-700">
            <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">Support</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-100">Contact Developer</h3>
                        <div className="space-y-4">
                            <Button variant="outline" className="w-full border-gray-700 text-gray-100">
                                <MessageSquare className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                            <Button variant="outline" className="w-full border-gray-700 text-gray-100">
                                <Globe className="w-4 h-4 mr-2" />
                                Visit Website
                            </Button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-100">Resources</h3>
                        <div className="space-y-4">
                            <Button variant="outline" className="w-full border-gray-700 text-gray-100">
                                <Share2 className="w-4 h-4 mr-2" />
                                Community Forum
                            </Button>
                            <Button variant="outline" className="w-full border-gray-700 text-gray-100">
                                <Code2 className="w-4 h-4 mr-2" />
                                Code Examples
                            </Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Support