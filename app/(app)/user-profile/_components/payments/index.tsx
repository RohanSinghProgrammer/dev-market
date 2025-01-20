import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'
import AddPaymentMethodDialog from './AddPaymentMethodDialog'

const Payments = () => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>Payment Methods</CardTitle>
      <CardDescription>Manage your payment options</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {/* Example Payment Method */}
        <div className="flex items-center justify-between p-4 border rounded">
          <div className="flex items-center gap-4">
            <CreditCard className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">•••• •••• •••• 4242</p>
              <p className="text-sm text-muted-foreground">
                Expires 12/24
              </p>
            </div>
          </div>
          <Button variant="outline">Remove</Button>
        </div>
        <AddPaymentMethodDialog />
      </div>
    </CardContent>
  </Card>
  )
}

export default Payments
