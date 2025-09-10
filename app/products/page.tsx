import { fetchProducts } from "@/lib/api";
import { CardCarousel } from "@/components/ui/card-carousel";
import { SectionHeader } from "@/components/section-header";
import Image from "next/image";
import Link from "next/link";

export default async function HomePage() {
  // Fetch products from the API
  const products = await fetchProducts();

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Featured Products" 
            subtitle="Discover our exclusive collection"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <Link 
                key={product.id} 
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={product.images?.[0]?.src || "/placeholder.jpg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
                  />
                  {product.badges?.[0] && (
                    <span className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 text-xs rounded">
                      {product.badges[0]}
                    </span>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold">₹{product.currentPrice || product.price}</p>
                      {product.originalPrice && (
                        <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
