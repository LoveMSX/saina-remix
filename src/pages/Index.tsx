import UserForm from '../components/UserForm';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            eSaina
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plateforme intelligente propulsée par l'IA
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground/60">
            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
            Inscription rapide et sécurisée
          </div>
        </div>

        {/* Form */}
        <div className="animate-slide-up">
          <UserForm />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground/60 animate-fade-in">
          <p className="flex items-center justify-center gap-2">
            Powered by
            <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              eKandra
            </span>
            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
          </p>
        </footer>
      </div>
    </div>
  );
}
