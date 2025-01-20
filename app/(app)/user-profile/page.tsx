import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Orders from "./_components/Orders";
import UserProfile from "./_components/user-profile";
import Payments from "./_components/Payments";

export default function AccountPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 max-sm:px-4">My Account</h1>

      <Tabs defaultValue="orders" className="space-y-4 max-md:px-2">
        <TabsList>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="payments">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="orders">
          <Orders />
        </TabsContent>

        <TabsContent value="profile">
          <UserProfile />
        </TabsContent>

        <TabsContent value="payments">
          <Payments />
        </TabsContent>
      </Tabs>
    </div>
  );
}