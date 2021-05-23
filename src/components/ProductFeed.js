import Product from "./Product"

function ProductFeed({products}) {
    return (

        <div className="grid lg:grid-cols-4 grid-flow-row-dense md:grid-cols-3 sm:grid-cols-2 gap-6 md:-mt-20 z-30 px-4">
            {
                products
                    .slice(0,4)
                    .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }

            <img 
                src="https://links.papareact.com/dyz" 
                alt="ad" 
                className="md:col-span-full" 
            />

            <div className="md:col-span-2">
                {
                    products
                        .slice(4,5)
                        .map(({ id, title, price, description, category, image }) => (
                        <Product
                            key={id}
                            title={title}
                            price={price}
                            description={description}
                            category={category}
                            image={image}
                        />
                    ))
                }
            </div>
            
            {
                products
                    .slice(5, products.length)
                    .map(({ id, title, price, description, category, image }) => (
                    <Product
                        key={id}
                        title={title}
                        price={price}
                        description={description}
                        category={category}
                        image={image}
                    />
                ))
            }

        </div>

    )
}

export default ProductFeed
