
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
    <section id="products" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive software solutions that work together seamlessly to power your retail business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border service-card animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary mt-1 flex-shrink-0">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
