import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="my-16 fade-in">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary transition-colors">
          LinkedIn
        </a>
        <a href="mailto:johndoe@example.com" className="text-primary hover:text-secondary transition-colors">
          Email
        </a>
      </div>
    </section>
  );
};

export default Contact;