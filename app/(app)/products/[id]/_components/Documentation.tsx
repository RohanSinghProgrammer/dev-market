import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Documentation = ({ product }: any) => {
  return (
    <Card className="bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-800">
      <CardContent className="p-6">
        <div className="prose max-w-none text-gray-400 dark:text-gray-300">
          <h2 className="text-xl font-semibold mb-4 text-gray-100 dark:text-gray-200">
            Documentation
          </h2>
          <p className="mb-4">
            Complete documentation including installation guides, API
            references, and best practices for implementing the image
            recognition system.
          </p>
          <ScrollArea className="h-96 w-full rounded-md border border-gray-700 dark:border-gray-800 p-4">
            {/* Documentation content would go here */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-200">
                Quick Start
              </h3>
              <p className="text-gray-400 dark:text-gray-300">
                Installation instructions and basic setup...
              </p>

              <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-200">
                API Reference
              </h3>
              <p className="text-gray-400 dark:text-gray-300">
                Detailed API documentation and examples...
              </p>

              <h3 className="text-lg font-semibold text-gray-100 dark:text-gray-200">
                Integration Guide
              </h3>
              <p className="text-gray-400 dark:text-gray-300">
                Step-by-step integration instructions...
              </p>
            </div>
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};

export default Documentation;
