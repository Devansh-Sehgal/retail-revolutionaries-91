
const ClientCard = ({ logo, name, description }) => {
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
        <div className="flip-card-back bg-gradient-to-br from-primary/90 to-primary rounded-xl shadow-md p-6 text-white flex flex-col justify-center">
          <h3 className="font-bold text-xl mb-2">{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
