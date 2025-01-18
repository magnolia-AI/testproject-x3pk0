'use client'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"
interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}
interface CartProps {
  items: CartItem[]
  onRemove: (id: number) => void
  onUpdateQuantity: (id: number, quantity: number) => void
}
export function Cart({ items, onRemove, onUpdateQuantity }: CartProps) {
  const router = useRouter()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const handleCheckout = () => {
    router.push('/checkout')
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[90vw] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-[calc(100vh-200px)] mt-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 mb-6">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                  >
                    -
                  </Button>
                  <span>{item.quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="ml-auto"
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-background border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <Button 
            className="w-full" 
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}