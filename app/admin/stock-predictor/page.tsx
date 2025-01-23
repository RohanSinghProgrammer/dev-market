"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown } from 'lucide-react';

const mockPredictionData = [
    { date: '2024-01-01', actual: 100, predicted: 102 },
    { date: '2024-01-02', actual: 105, predicted: 103 },
    // More data points...
];

export default function StockPredictor() {
    const [stockSymbol, setStockSymbol] = useState('');
    const [predictionData, setPredictionData] = useState(mockPredictionData);

    const handlePrediction = async () => {
        // Implement actual prediction logic
        console.log(`Predicting for ${stockSymbol}`);
    };

    return (
        <div className="space-y-6">
            <div className="flex space-x-4">
                <Input
                    placeholder="Enter Stock Symbol"
                    value={stockSymbol}
                    onChange={(e) => setStockSymbol(e.target.value)}
                    className="flex-grow"
                />
                <Button onClick={handlePrediction}>
                    Predict
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Price Trend</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <TrendingUp className="text-green-500" />
                        <span>Bullish</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Volatility</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center space-x-4">
                        <TrendingDown className="text-red-500" />
                        <span>High</span>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Prediction Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent>
                        85%
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Stock Price Prediction</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={predictionData}>
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="actual" stroke="#8884d8" />
                            <Line type="monotone" dataKey="predicted" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    );
}