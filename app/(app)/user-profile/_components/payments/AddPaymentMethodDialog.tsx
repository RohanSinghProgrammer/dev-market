"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CreditCard } from 'lucide-react'
import React, { useState } from 'react'

const AddPaymentMethodDialog = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="default" onClick={() => setIsOpen(true)}>Add Payment Method</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add Payment Method</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <RadioGroup defaultValue="card">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="card" id="card" />
                            <Label htmlFor="card" className="flex items-center gap-2">
                                <CreditCard className="w-4 h-4" />
                                Credit/Debit Card
                            </Label>
                        </div>
                    </RadioGroup>

                    <div className="space-y-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cardName">Card Holder Name</Label>
                            <Input id="cardName" placeholder="John Doe" />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" placeholder="MM/YY" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvc">CVC</Label>
                                <Input id="cvc" placeholder="123" />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button>Add Card</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddPaymentMethodDialog
