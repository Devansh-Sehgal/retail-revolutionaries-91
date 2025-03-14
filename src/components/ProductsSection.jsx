import { BarChart, Package, ShoppingCart, CreditCard } from 'lucide-react';

const ProductsSection = () => {

  const products = [
    {
      icon: Package,
      title: 'Inventory Management',
      features: [
        'Multi-location inventory tracking',
        'Real-time stock updates',
        'Barcode and RFID integration',
        'Automatic reordering',
        'Batch and lot tracking'
      ]
    },
    {
      icon: BarChart,
      title: 'Manufacturing',
      features: [
        'BOM and production planning',
        'Raw materials management',
        'Work order management',
        'Quality control integration',
        'Production analytics'
      ]
    },
    {
      icon: ShoppingCart,
      title: 'Retail and Point of Sale',
      features: [
        'Omnichannel inventory sync',
        'In-store and online integration',
        'Customer purchase history',
        'Employee performance tracking',
        'Promotion management'
      ]
    },
    {
      icon: CreditCard,
      title: 'Accounts',
      features: [
        'Inventory valuation',
        'Cost of goods sold tracking',
        'Vendor management',
        'Purchase order automation',
        'Financial reporting integration'
      ]
    }
  ];

  return (

    <section id="products" className="py-4 bg-muted/50">

      <div className='flex flex-col gap-2'>

        <div className="text-center mb-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software solutions that work together seamlessly to power your retail business.
          </p>
        </div>

        <div className="flex flex-col h-[460px] p-3  items-center md:justify-center w-full rounded-3xl gap-10 overflow-y- scrollbar-hide">

          <div className="relative grid grid-cols-1 rounded-2xl md:grid-cols-2 gap-6 overflow-hidden overflow-y-scroll scrollbar-hide">

            {products.map((product, index) => (
              <div
                key={index}
                className="animate-fade-up sticky top-0 rounded-2xl p-2"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >

                <div
                  className={`bg-white p-6 rounded-xl shadow-lg border border-border group hover:shadow-xl transition-all duration-300 relative overflow-hidden service-card h-full min-h-[340px] flex flex-col ${index % 2 === 1 ? 'rotate-2' : '-rotate-2'} w-[350px] sm:w-[400px] md:w-[380px] lg:w-[500px] xl:w-[550px]`}
                >

                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      <product.icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4">{product.title}</h3>

                      <ul className="space-y-2">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-muted-foreground">
                            <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <a
                          href="#"
                          className="inline-flex items-center text-primary font-medium hover:underline"
                        >
                          Learn more
                          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div className="h-1 w-0 bg-primary mt-6 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </div>

              </div>

            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
