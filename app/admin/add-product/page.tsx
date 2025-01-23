"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ExternalLink, FileText, Upload } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import React, { useState } from 'react'

const ImageTypes = ['.jpg', '.png', '.jpeg', '.svg', '.gif'];
const DocumentationTypes = ['.md'];
const SourceCodeTypes = ['.zip'];

const AddProduct = () => {
    const [productImg, setProductImg] = useState<File | null>(null);
    const [documentation, setDocumentation] = useState<File | null>(null);
    const [sourceCode, setSourceCode] = useState<File | null>(null);

    const ProductImageDropzone = () => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop: (acceptedFiles: File[]) => {
                setProductImg(acceptedFiles[0]);
            },
            accept: {
                'image/*': ImageTypes
            },
            maxFiles: 1
        });

        return (
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-4 text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-8 w-8 mb-2" />
                <p className="text-sm">
                    {isDragActive
                        ? 'Drop the file here ...'
                        : 'Drag and drop or click to upload'}
                </p>
            </div>
        );
    };

    const DocumentationDropzone = () => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop: (acceptedFiles: File[]) => {
                setDocumentation(acceptedFiles[0]);
            },
            accept: {
                'text/markdown': DocumentationTypes
            },
            maxFiles: 1
        });

        return (
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-4 text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
            >
                <input {...getInputProps()} />
                <FileText className="mx-auto h-8 w-8 mb-2" />
                <p className="text-sm">
                    {isDragActive
                        ? 'Drop the file here ...'
                        : 'Upload README.md file'}
                </p>
            </div>
        );
    };

    const SourceCodeDropzone = () => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop: (acceptedFiles: File[]) => {
                setSourceCode(acceptedFiles[0]);
            },
            accept: {
                'application/zip': SourceCodeTypes
            },
            maxFiles: 1
        });

        return (
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-4 text-center ${isDragActive ? 'border-blue-500' : 'border-gray-300'}`}
            >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-8 w-8 mb-2" />
                <p className="text-sm">
                    {isDragActive
                        ? 'Drop the file here ...'
                        : 'Upload ZIP file'}
                </p>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Add New Product</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Previous form fields remain the same */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Product Name</label>
                        <Input placeholder="Enter product name" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Description</label>
                        <Textarea placeholder="Enter product description" />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Product Image</label>
                        <ProductImageDropzone />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Price</label>
                        <Input type="number" placeholder="Enter price" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Tags</label>
                        <Input placeholder="Enter tags (comma separated)" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Key Features</label>
                        <Textarea placeholder="Enter key features (comma separated)" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Technical Requirements</label>
                        <Textarea placeholder="Enter technical requirements (comma separated)" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Included Resources</label>
                        <Textarea placeholder="Enter included resources (comma separated)" />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Documentation (README.md)</label>
                        <DocumentationDropzone />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Source Code</label>
                        <SourceCodeDropzone />
                    </div>


                    <div>
                        <label className="block text-sm font-medium mb-1">Live Demo Link</label>
                        <div className="flex space-x-2">
                            <Input placeholder="Enter live demo URL" />
                            <Button variant="outline">
                                <ExternalLink className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <Button className="w-full">Add Product</Button>
                </CardContent>
            </Card>
        </div>
    )
};

export default AddProduct