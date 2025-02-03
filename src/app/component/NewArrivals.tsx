import { client } from "@/sanity/lib/client";

async function getData() {
  const fetchData = await client.fetch(`*[_type == "name"]{
      _id,
      name,
      "imageUrl": image.asset->url,
      price,
      discountedPrice,
      rating {
        stars
      },
      score,
      "slug": slug.current
    }`);
  return fetchData;
}

export default async function NewArrivals() {
  const data = await getData();
  console.log("Products Data:", data); // Debugging

  if (!data || data.length === 0) {
    return <p>No products found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="NewArrivalHeading mb-4">
        <span className="text-2xl font-bold">New Arrivals</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {data.map((product: any, i: number) => (
          <div key={i} className="border p-4 shadow-md rounded-md bg-white">
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded-lg" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">⭐ {product.rating.stars} <span>({product.score})</span></p>
            <p className="mt-1 text-lg font-bold">
              ${product.discountedPrice ? product.discountedPrice : product.price}
              {product.discountedPrice && (
                <span className="line-through text-gray-500 ml-2">${product.price}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
