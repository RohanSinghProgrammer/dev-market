import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const UserProfile = () => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Manage your personal details</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium">Full Name</label>
                                <p className="mt-1">John Doe</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <p className="mt-1">john.doe@example.com</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Phone</label>
                                <p className="mt-1">+1 234 567 890</p>
                            </div>
                            <div>
                                <label className="text-sm font-medium">Address</label>
                                <p className="mt-1">123 Main St, City, Country</p>
                            </div>
                        </div>
                        <Button>Edit Profile</Button>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default UserProfile
