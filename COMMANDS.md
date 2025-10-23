# 🔧 Commandes Utiles - eKandra

## 🚀 Démarrage et Développement

### Démarrer le serveur de développement
```bash
npm run dev
# ou
yarn dev
```
Accédez à: `http://localhost:5173/`

### Build pour la production
```bash
npm run build
# ou
yarn build
```

### Prévisualiser le build
```bash
npm run preview
# ou
yarn preview
```

### Linter le code
```bash
npm run lint
# ou
yarn lint
```

---

## 📦 Gestion des Dépendances

### Installer toutes les dépendances
```bash
npm install
# ou
yarn install
```

### Ajouter une nouvelle dépendance
```bash
npm install <package-name>
# ou
yarn add <package-name>
```

### Ajouter une dépendance de développement
```bash
npm install -D <package-name>
# ou
yarn add -D <package-name>
```

### Supprimer une dépendance
```bash
npm uninstall <package-name>
# ou
yarn remove <package-name>
```

### Mettre à jour les dépendances
```bash
npm update
# ou
yarn upgrade
```

### Vérifier les vulnérabilités
```bash
npm audit
```

### Corriger les vulnérabilités
```bash
npm audit fix
```

---

## 🎨 Tailwind CSS

### Générer les styles Tailwind
```bash
npm run build
```

### Purger les styles inutilisés
```bash
npm run build
```

### Ajouter une nouvelle couleur personnalisée
Modifier `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      myColor: '#hexcode'
    }
  }
}
```

---

## 🔍 Débogage

### Ouvrir la console du navigateur
```
F12 ou Ctrl+Shift+I (Windows/Linux)
Cmd+Option+I (Mac)
```

### Utiliser React DevTools
1. Installer l'extension React DevTools
2. Ouvrir les DevTools (F12)
3. Aller à l'onglet "Components"

### Utiliser Vite DevTools
- Console Ninja intégrée
- HMR (Hot Module Replacement) automatique

---

## 📁 Structure des Fichiers

### Créer une nouvelle page
```bash
# 1. Créer le fichier
touch src/pages/mypage/index.tsx

# 2. Ajouter la route dans src/router/privateRouter.tsx
<Route path="mypage" element={<MyPage/>} />
```

### Créer un nouveau composant
```bash
# 1. Créer le dossier
mkdir src/components/mycomponent

# 2. Créer les fichiers
touch src/components/mycomponent/index.tsx
touch src/components/mycomponent/index.css
```

---

## 🧹 Nettoyage et Maintenance

### Nettoyer les dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

### Nettoyer le cache Vite
```bash
rm -rf .vite
npm run dev
```

### Nettoyer le build
```bash
rm -rf dist
npm run build
```

---

## 📊 Analyse et Performance

### Analyser la taille du bundle
```bash
npm run build
# Vérifier la taille dans le dossier dist/
```

### Vérifier les dépendances inutilisées
```bash
npm ls --depth=0
```

### Vérifier les mises à jour disponibles
```bash
npm outdated
```

---

## 🔐 Sécurité

### Vérifier les vulnérabilités
```bash
npm audit
```

### Corriger les vulnérabilités automatiquement
```bash
npm audit fix
```

### Corriger les vulnérabilités manuellement
```bash
npm audit fix --force
```

---

## 🌐 Déploiement

### Préparer pour la production
```bash
npm run build
```

### Vérifier le build
```bash
npm run preview
```

### Déployer sur Vercel
```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

---

## 🐛 Troubleshooting

### Le serveur ne démarre pas
```bash
# Nettoyer et réinstaller
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Erreurs de compilation
```bash
# Vérifier les erreurs TypeScript
npm run build

# Linter le code
npm run lint
```

### Port 5173 déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- --port 3000
```

### Problèmes de cache
```bash
# Nettoyer le cache du navigateur
# Ctrl+Shift+Delete (Windows/Linux)
# Cmd+Shift+Delete (Mac)

# Ou utiliser le mode incognito
```

---

## 📚 Ressources Utiles

### Documentation Officielle
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

### Outils Recommandés
- [VS Code](https://code.visualstudio.com)
- [React DevTools](https://react-devtools-tutorial.vercel.app)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

---

## 💡 Tips & Tricks

### Utiliser les variables d'environnement
```bash
# Créer un fichier .env
VITE_API_URL=http://localhost:3000

# Utiliser dans le code
const apiUrl = import.meta.env.VITE_API_URL
```

### Utiliser les alias de chemin
```javascript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

### Utiliser les styles CSS modules
```tsx
import styles from './Component.module.css'

export const Component = () => (
  <div className={styles.container}>
    Contenu
  </div>
)
```

---

## 🎯 Workflow Recommandé

### 1. Développement
```bash
npm run dev
# Faire les modifications
# Le HMR recharge automatiquement
```

### 2. Vérification
```bash
npm run lint
npm run build
```

### 3. Test
```bash
npm run preview
# Tester dans le navigateur
```

### 4. Déploiement
```bash
npm run build
# Déployer le dossier dist/
```

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23

