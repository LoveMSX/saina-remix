# 🚀 Guide de Déploiement - eKandra

## 📋 Prérequis

- Node.js 18+ installé
- npm ou yarn
- Git configuré
- Accès au serveur de déploiement

## 🔧 Installation Locale

```bash
# Cloner le repository
git clone <repository-url>
cd eSaina

# Installer les dépendances
npm install

# Vérifier la version de Node
node --version
npm --version
```

## 🏗️ Build et Test

### Développement
```bash
# Démarrer le serveur de développement
npm run dev

# L'application sera accessible à http://localhost:5173
```

### Production
```bash
# Créer un build de production
npm run build

# Vérifier le build
npm run preview

# Linter le code
npm run lint
```

## 📦 Structure du Build

```
dist/
├── index.html                 # Point d'entrée HTML
├── assets/
│   ├── index-*.css           # Fichiers CSS optimisés
│   └── index-*.js            # Fichiers JavaScript optimisés
└── vite.svg                  # Assets statiques
```

## 🌐 Déploiement

### Option 1: Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déployer en production
vercel --prod
```

### Option 2: Netlify
```bash
# Installer Netlify CLI
npm i -g netlify-cli

# Déployer
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages
```bash
# Ajouter au package.json:
"homepage": "https://username.github.io/eSaina"

# Installer gh-pages
npm install --save-dev gh-pages

# Ajouter scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Déployer
npm run deploy
```

### Option 4: Serveur Personnalisé
```bash
# Copier le contenu de dist/ vers le serveur
scp -r dist/* user@server:/var/www/ekandra/

# Ou avec rsync
rsync -avz dist/ user@server:/var/www/ekandra/
```

## 🔐 Variables d'Environnement

Créer un fichier `.env.production`:
```
VITE_API_URL=https://api.ekandra.com
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## ✅ Checklist de Déploiement

- [ ] Tous les tests passent (`npm run build`)
- [ ] Pas d'erreurs TypeScript
- [ ] Pas d'avertissements critiques
- [ ] Variables d'environnement configurées
- [ ] HTTPS activé sur le serveur
- [ ] CORS configuré correctement
- [ ] Cache headers configurés
- [ ] Monitoring en place
- [ ] Backups configurés
- [ ] Plan de rollback préparé

## 📊 Monitoring Post-Déploiement

### Vérifier la Performance
```bash
# Lighthouse
npm install -g lighthouse
lighthouse https://ekandra.com

# WebPageTest
# Visiter https://www.webpagetest.org/
```

### Logs et Erreurs
- Configurer Sentry pour le tracking d'erreurs
- Configurer Google Analytics
- Monitorer les performances avec Web Vitals

## 🔄 Mise à Jour

### Mise à Jour des Dépendances
```bash
# Vérifier les mises à jour disponibles
npm outdated

# Mettre à jour les dépendances
npm update

# Mettre à jour une dépendance spécifique
npm install package@latest
```

### Rollback
```bash
# En cas de problème, revenir à la version précédente
git revert <commit-hash>
npm run build
# Redéployer
```

## 🐛 Troubleshooting

### Build échoue
```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erreurs de CORS
- Vérifier la configuration du serveur
- Ajouter les headers CORS appropriés
- Vérifier les URLs d'API

### Performance lente
- Vérifier les assets non optimisés
- Analyser le bundle avec `npm run build -- --analyze`
- Activer la compression gzip sur le serveur

## 📞 Support

Pour toute question ou problème:
1. Vérifier la documentation
2. Consulter les logs
3. Contacter l'équipe de support

## 📚 Ressources Utiles

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Web Vitals](https://web.dev/vitals/)

## 🎯 Objectifs de Performance

- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Time to Interactive: < 3.5s

---

**Dernière mise à jour**: 2025-10-23
**Version**: 1.0.0

