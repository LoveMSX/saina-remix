# ❓ FAQ - eKandra

## 🎨 Design et Styles

### Q: Comment ajouter une nouvelle couleur?
**R:** Modifiez `src/constants/colors.ts`:
```typescript
export const colors = {
  // ...
  myColor: '#hexcode'
}
```

### Q: Comment utiliser les couleurs dans un composant?
**R:** Utilisez le hook `useThemeColors`:
```tsx
import { useThemeColors } from '../../hooks/theme'

const MyComponent = () => {
  const colors = useThemeColors()
  return <div style={{color: colors.primary}}>Texte</div>
}
```

### Q: Comment ajouter une animation personnalisée?
**R:** Modifiez `tailwind.config.js`:
```javascript
animation: {
  'my-animation': 'myAnimation 0.5s ease-in-out'
}
```

### Q: Comment faire un design responsive?
**R:** Utilisez les grilles fluides:
```tsx
style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1.5rem'
}}
```

---

## 🧩 Composants

### Q: Comment créer un nouveau composant?
**R:** 
1. Créez un dossier dans `src/components/`
2. Créez `index.tsx` et `index.css`
3. Exportez le composant

### Q: Comment réutiliser un composant?
**R:** Importez-le et utilisez-le:
```tsx
import MyComponent from '../../components/mycomponent'

<MyComponent prop1="value" prop2={value} />
```

### Q: Comment passer des props?
**R:** Définissez une interface et utilisez-la:
```tsx
interface MyComponentProps {
  title: string
  onClick: () => void
}

const MyComponent = ({ title, onClick }: MyComponentProps) => {
  // Implémentation
}
```

### Q: Comment utiliser le formulaire générique?
**R:**
```tsx
import GenericForm from '../../components/form'

<GenericForm
  fields={fields}
  initialValues={initialValues}
  onSubmit={handleSubmit}
  title="Mon Formulaire"
/>
```

---

## 📱 Responsive Design

### Q: Comment tester le responsive design?
**R:** 
```bash
npm run dev -- --host
# Accédez via l'adresse IP locale sur mobile
```

### Q: Comment masquer un élément sur mobile?
**R:** Utilisez Tailwind CSS:
```jsx
<div className="hidden md:block">
  Visible uniquement sur desktop
</div>
```

### Q: Comment adapter la grille pour mobile?
**R:**
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

---

## ⚡ Performance

### Q: Comment optimiser les performances?
**R:** 
1. Utilisez le lazy loading
2. Mémorisez les composants
3. Optimisez les images
4. Divisez le code

### Q: Comment utiliser le lazy loading?
**R:**
```tsx
import { lazy, Suspense } from 'react'

const MyPage = lazy(() => import('./pages/MyPage'))

<Suspense fallback={<Spinner />}>
  <MyPage />
</Suspense>
```

### Q: Comment vérifier la taille du bundle?
**R:**
```bash
npm run build
# Vérifiez la taille dans dist/
```

---

## 🔐 Sécurité

### Q: Comment utiliser les variables d'environnement?
**R:** Créez un fichier `.env`:
```
VITE_API_URL=http://localhost:3000
```

Utilisez-les dans le code:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

### Q: Comment valider les entrées utilisateur?
**R:**
```tsx
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```

### Q: Comment gérer les erreurs?
**R:**
```tsx
try {
  // Code
} catch (error) {
  console.error('Erreur:', error)
}
```

---

## 🧪 Tests

### Q: Comment tester un composant?
**R:**
```tsx
import { render, screen } from '@testing-library/react'

test('Component renders', () => {
  render(<MyComponent />)
  expect(screen.getByText('Text')).toBeInTheDocument()
})
```

### Q: Comment tester un hook?
**R:**
```tsx
import { renderHook } from '@testing-library/react'

test('Hook works', () => {
  const { result } = renderHook(() => useMyHook())
  expect(result.current).toBeDefined()
})
```

---

## 🐛 Troubleshooting

### Q: Le serveur ne démarre pas
**R:** Nettoyez et réinstallez:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Q: Erreurs de compilation
**R:** Vérifiez les erreurs TypeScript:
```bash
npm run build
npm run lint
```

### Q: Port 5173 déjà utilisé
**R:** Utilisez un autre port:
```bash
npm run dev -- --port 3000
```

### Q: Les styles ne s'appliquent pas
**R:** Vérifiez:
1. Les imports CSS
2. Les noms de classe Tailwind
3. Le cache du navigateur (Ctrl+Shift+Delete)

### Q: Les couleurs ne changent pas
**R:** Vérifiez:
1. L'utilisation de `useThemeColors()`
2. Les valeurs dans `src/constants/colors.ts`
3. Le cache du navigateur

### Q: Les animations ne fonctionnent pas
**R:** Vérifiez:
1. La configuration dans `tailwind.config.js`
2. Les propriétés CSS
3. Les délais d'animation

---

## 📚 Documentation

### Q: Où trouver la documentation?
**R:** Consultez ces fichiers:
- `QUICK_START.md` - Démarrage rapide
- `STYLE_GUIDE.md` - Guide de style
- `DEVELOPMENT_GUIDE.md` - Guide de développement
- `BEST_PRACTICES.md` - Bonnes pratiques
- `COMMANDS.md` - Commandes utiles

### Q: Comment contribuer?
**R:** 
1. Créez une branche
2. Faites vos modifications
3. Testez vos changements
4. Créez une pull request

### Q: Comment signaler un bug?
**R:** Créez une issue avec:
1. Description du bug
2. Étapes pour reproduire
3. Résultat attendu
4. Résultat actuel

---

## 🚀 Déploiement

### Q: Comment déployer sur Vercel?
**R:**
```bash
npm install -g vercel
vercel
```

### Q: Comment déployer sur Netlify?
**R:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Q: Comment configurer les variables d'environnement?
**R:** Créez un fichier `.env.production`:
```
VITE_API_URL=https://api.example.com
```

### Q: Comment vérifier le build avant de déployer?
**R:**
```bash
npm run build
npm run preview
```

---

## 💡 Tips & Tricks

### Q: Comment déboguer avec React DevTools?
**R:**
1. Installez l'extension React DevTools
2. Ouvrez les DevTools (F12)
3. Allez à l'onglet "Components"
4. Inspectez les props et state

### Q: Comment utiliser les alias de chemin?
**R:** Modifiez `vite.config.ts`:
```javascript
resolve: {
  alias: {
    '@': '/src',
  },
}
```

Utilisez-les:
```tsx
import MyComponent from '@/components/mycomponent'
```

### Q: Comment utiliser les CSS modules?
**R:**
```tsx
import styles from './Component.module.css'

<div className={styles.container}>
  Contenu
</div>
```

### Q: Comment ajouter des polices personnalisées?
**R:** Modifiez `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=MyFont:wght@400;700&display=swap');
```

---

## 📞 Support

### Q: Où obtenir de l'aide?
**R:** Consultez:
1. La documentation dans les fichiers .md
2. Les commentaires dans le code
3. React DevTools pour déboguer
4. La console du navigateur pour les erreurs

### Q: Comment contacter le support?
**R:** Créez une issue sur le repository

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23

