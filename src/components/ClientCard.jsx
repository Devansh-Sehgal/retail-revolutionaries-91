
const ClientCard = ({ logo, name, description, industry }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-center p-6 border border-border">
          <img
            src={logo}
            alt={`${name} logo`}
            className="max-w-[80%] max-h-[120px] object-contain"
          />
        </div>
        <div className="flip-card-back bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-xl p-6 flex flex-col items-center justify-center shadow-md text-white">
          <h3 className="text-xl font-semibold mb-3">{name}</h3>
          <p className="text-center">{description}</p>
          <div className="mt-4 bg-white/20 px-3 py-1 rounded-full text-sm">
            {industry}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
