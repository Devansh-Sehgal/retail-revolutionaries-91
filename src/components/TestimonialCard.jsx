
const TestimonialCard = ({ quote, author, company, image, rating }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border relative">
      {/* Quotation mark */}
      <div className="absolute top-4 right-4 text-primary/20 text-6xl font-serif">"</div>
      
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary">
          <img 
            src={image || `https://i.pravatar.cc/48?u=${author.replace(/\s/g, '')}`} 
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div>
          <div className="flex mb-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-muted-foreground mb-4">{quote}</p>
          
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
