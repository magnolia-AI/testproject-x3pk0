'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
// Mock product data
const products = [
  {
    id: 1,
    name: "Abstract Wave Sculpture",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1565378435245-4282cbda75c9?w=500&h=500&fit=crop",
    description: "Hand-crafted abstract wave pattern in earthen tones"
  },
  {
    id: 2,
    name: "Modern Face Sculpture",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
    description: "Contemporary facial sculpture with minimalist design"
  },
  {
    id: 3,
    name: "Nature-Inspired Bowl",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=500&h=500&fit=crop",
    description: "Organic-shaped decorative bowl with leaf patterns"
  },
  {
    id: 4,
    name: "Abstract Figure",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1565378435245-4282cbda75c9?w=500&h=500&fit=crop",
    description: "Modern interpretation of human form in clay"
  }
]
export default function Home() {
  const { toast } = useToast()
  const handleAddToCart = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`
    })
  }
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Artisanal Clay Sculptures
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Discover unique handcrafted clay sculptures that bring artistry to your space
          </p>
        </div>
      </section>
      {/* Product Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-2">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleAddToCart(product.name)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Handcrafted Quality</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each piece is carefully crafted by skilled artisans with attention to detail.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Unique Designs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every sculpture is one-of-a-kind, ensuring you own a truly unique piece.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-background border-none shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Secure Shipping</h3>
              <p className="text-muted-foreground leading-relaxed">
                Carefully packed and shipped to ensure your sculpture arrives safely.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 h-16 flex items-center justify-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Clay Sculpture Gallery. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  )
}