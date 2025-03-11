
import ClientCard from './ClientCard';

const ClientsSection = () => {
  const clients = [
    {
      logo: "https://via.placeholder.com/180x80?text=FashionCo",
      name: "FashionCo",
      description: "Leading apparel manufacturer implemented our inventory system across 120 global stores."
    },
    {
      logo: "https://via.placeholder.com/180x80?text=TrendMart",
      name: "TrendMart",
      description: "Lifestyle retailer that cut inventory costs by 25% with our optimization algorithms."
    },
    {
      logo: "https://via.placeholder.com/180x80?text=QuickGrocer",
      name: "QuickGrocer",
      description: "Supermarket chain that reduced spoilage by 30% using our forecasting tools."
    },
    {
      logo: "https://via.placeholder.com/180x80?text=StyleDirect",
      name: "StyleDirect",
      description: "D2C fashion brand that scaled fulfillment operations 3x without adding staff."
    },
    {
      logo: "https://via.placeholder.com/180x80?text=LuxuryOne",
      name: "LuxuryOne",
      description: "Premium retailer using our omnichannel inventory to power personalized shopping."
    },
    {
      logo: "https://via.placeholder.com/180x80?text=MegaShop",
      name: "MegaShop",
      description: "Multi-category retailer that unified inventory across 50+ departments and 200 stores."
    }
  ];

  return (
    <section id="clients" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-lg text-muted-foreground">
            Trusted by leading retailers and brands worldwide to transform their inventory operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="animate-fade-up" 
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <ClientCard {...client} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
