"use client"

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    User,
    Phone,
    Mail,
    MapPin,
    Upload,
} from "lucide-react";

const EditUserDialog = () => {
    const [profileImage, setProfileImage] = React.useState("/api/placeholder/150/150");
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="space-y-4">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="default" onClick={() => setIsOpen(true)}>Edit Profile</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Edit Profile</DialogTitle>
                    </DialogHeader>

                    <div className="space-y-6">
                        {/* Profile Image */}
                        <div className="flex flex-col items-center space-y-4">
                            <Avatar className="w-24 h-24">
                                <AvatarImage src={profileImage} />
                                <AvatarFallback>UN</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="sm" onClick={() => (document.querySelector('#profile-image') as HTMLInputElement)?.click()}>
                                    <Upload className="w-4 h-4 mr-2" />
                                    Upload Image
                                </Button>
                                <input
                                    id="profile-image"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            // Handle image upload
                                        }
                                    }}
                                />
                            </div>
                        </div>

                        <div className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">
                                    <User className="w-4 h-4 inline mr-2" />
                                    Full Name
                                </Label>
                                <Input id="name" defaultValue="John Doe" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="email">
                                    <Mail className="w-4 h-4 inline mr-2" />
                                    Email
                                </Label>
                                <Input id="email" type="email" defaultValue="john@example.com" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="phone">
                                    <Phone className="w-4 h-4 inline mr-2" />
                                    Phone Number
                                </Label>
                                <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="address">
                                    <MapPin className="w-4 h-4 inline mr-2" />
                                    Address
                                </Label>
                                <Input id="address" defaultValue="123 Main St, City, Country" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
                            <Button onClick={() => setIsOpen(false)}>Save Changes</Button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default EditUserDialog;
