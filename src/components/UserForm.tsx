import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  country: string;
  gender: string;
  bio: string;
  acceptTerms: boolean;
}

export default function UserForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    country: '',
    gender: '',
    bio: '',
    acceptTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    alert('✅ Inscription réussie !');
    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto glass-effect p-8 rounded-2xl border border-white/10">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Names */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-semibold text-foreground">
              Prénom *
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
              placeholder="Votre prénom"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-semibold text-foreground">
              Nom *
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
              placeholder="Votre nom"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-foreground">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
            placeholder="votre.email@exemple.com"
          />
        </div>

        {/* Age & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="age" className="block text-sm font-semibold text-foreground">
              Âge *
            </label>
            <input
              id="age"
              name="age"
              type="number"
              required
              min="1"
              max="120"
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
              placeholder="25"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="country" className="block text-sm font-semibold text-foreground">
              Pays *
            </label>
            <input
              id="country"
              name="country"
              type="text"
              required
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
              placeholder="France"
            />
          </div>
        </div>

        {/* Gender */}
        <div className="space-y-2">
          <label htmlFor="gender" className="block text-sm font-semibold text-foreground">
            Genre *
          </label>
          <select
            id="gender"
            name="gender"
            required
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift"
          >
            <option value="">Sélectionner</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
            <option value="other">Autre</option>
          </select>
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <label htmlFor="bio" className="block text-sm font-semibold text-foreground">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows={4}
            value={formData.bio}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover-lift resize-none"
            placeholder="Parlez-nous de vous..."
          />
        </div>

        {/* Terms */}
        <div className="flex items-start space-x-3">
          <input
            id="acceptTerms"
            name="acceptTerms"
            type="checkbox"
            required
            checked={formData.acceptTerms}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-primary"
          />
          <label htmlFor="acceptTerms" className="text-sm text-foreground/80">
            J'accepte les conditions d'utilisation et la politique de confidentialité *
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold rounded-xl transition-all duration-500 hover-lift glow-effect disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="animate-spin">⏳</span> Inscription en cours...
            </span>
          ) : (
            "S'inscrire"
          )}
        </button>
      </form>
    </div>
  );
}
