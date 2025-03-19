
import { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-8">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          
          <h2 className="text-4xl font-bold mb-4">
            Stay Updated with Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-8">
            Get the latest updates about retail solutions, industry insights, and exclusive offers delivered directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-6 py-4 rounded-xl border bg-card focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
              required
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
