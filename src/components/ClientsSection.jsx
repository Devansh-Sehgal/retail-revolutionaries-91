
import ClientCard from './ClientCard';

const ClientsSection = () => {

  const clients = [
    {
      name: "FashionForward",
      logo: "FF",
      description: "Leading fashion retailer with 50+ stores nationwide using our inventory solutions since 2019.",
      industry: "Fashion Retail",
      image: "/clients/fashion-forward.jpg"
    },
    {
      name: "Market Fresh",
      logo: "MF",
      description: "Regional supermarket chain that reduced waste by 35% using our forecasting tools.",
      industry: "Supermarkets",
      image: "/clients/market-fresh.jpg"
    },
    {
      name: "Urban Essentials",
      logo: "UE",
      description: "Fast-growing D2C brand managing multiple product lines across e-commerce channels.",
      industry: "D2C Brands",
      image: "/clients/urban-essentials.jpg"
    },
    {
      name: "StyleHub",
      logo: "SH",
      description: "Fashion distributor handling 200+ brands using our warehouse management solutions.",
      industry: "Fashion Distribution",
      image: "/clients/style-hub.jpg"
    },
    {
      name: "LuxeLifestyle",
      logo: "LL",
      description: "Premium lifestyle brand that improved inventory turns by 40% with our platform.",
      industry: "Lifestyle Brands",
      image: "/clients/luxe-lifestyle.jpg"
    },
    {
      name: "Craft Manufacturing",
      logo: "CM",
      description: "Specialty manufacturer using our solutions to optimize production scheduling and materials.",
      industry: "Manufacturing",
      image: "/clients/craft-manufacturing.jpg"
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
