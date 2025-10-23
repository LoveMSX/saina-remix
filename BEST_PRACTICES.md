# 🏆 Bonnes Pratiques - eKandra

## 🎨 Styles et CSS

### ✅ À Faire

#### Utiliser les couleurs du système
```tsx
import { useThemeColors } from '../../hooks/theme'

const MyComponent = () => {
  const colors = useThemeColors()
  
  return (
    <div style={{
      backgroundColor: colors.primaryBackground,
      color: colors.text,
      border: `1px solid ${colors.border}`
    }}>
      Contenu
    </div>
  )
}
```

#### Utiliser Tailwind CSS
```jsx
<div className="bg-primary text-white p-4 rounded-lg shadow-lg">
  Contenu
</div>
```

#### Respecter l'espacement standard
```tsx
style={{
  padding: '1.5rem',
  gap: '1rem',
  marginBottom: '2rem'
}}
```

#### Ajouter des transitions fluides
```tsx
style={{
  transition: 'all 0.3s ease',
  transform: 'translateY(-2px)'
}}
```

### ❌ À Éviter

#### Ne pas utiliser des couleurs en dur
```tsx
// ❌ Mauvais
<div style={{backgroundColor: '#0ea5e9'}}>
```

#### Ne pas ignorer les transitions
```tsx
// ❌ Mauvais
<div style={{backgroundColor: colors.primary}}>
  // Pas de transition
</div>
```

#### Ne pas utiliser des espacements aléatoires
```tsx
// ❌ Mauvais
<div style={{padding: '13px', margin: '7px'}}>
```

---

## 🧩 Composants

### ✅ À Faire

#### Créer des composants réutilisables
```tsx
interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  // Implémentation
}
```

#### Utiliser les props pour la flexibilité
```tsx
<Card style={{flex: 1, padding: '2rem'}}>
  <CardBody>Contenu</CardBody>
</Card>
```

#### Documenter les props avec JSDoc
```tsx
/**
 * Composant Button
 * @param label - Texte du bouton
 * @param onClick - Fonction appelée au clic
 * @param variant - Style du bouton
 */
const Button = ({ label, onClick, variant }: ButtonProps) => {
  // Implémentation
}
```

### ❌ À Éviter

#### Ne pas créer des composants trop complexes
```tsx
// ❌ Mauvais - Trop de logique
const ComplexComponent = () => {
  // 500 lignes de code
}
```

#### Ne pas passer trop de props
```tsx
// ❌ Mauvais - Trop de props
<Component a={1} b={2} c={3} d={4} e={5} f={6} />
```

---

## 📱 Responsive Design

### ✅ À Faire

#### Utiliser les grilles fluides
```tsx
style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1.5rem'
}}
```

#### Tester sur mobile
```bash
npm run dev -- --host
# Accédez via l'adresse IP locale
```

#### Utiliser les breakpoints Tailwind
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Responsive grid */}
</div>
```

### ❌ À Éviter

#### Ne pas utiliser des largeurs fixes
```tsx
// ❌ Mauvais
<div style={{width: '1200px'}}>
```

#### Ne pas ignorer le mobile
```tsx
// ❌ Mauvais - Pas de responsive
<div style={{display: 'flex', gap: '2rem'}}>
```

---

## ⚡ Performance

### ✅ À Faire

#### Utiliser le lazy loading
```tsx
import { lazy, Suspense } from 'react'

const MyPage = lazy(() => import('./pages/MyPage'))

<Suspense fallback={<Spinner />}>
  <MyPage />
</Suspense>
```

#### Mémoriser les composants
```tsx
import { memo } from 'react'

const MyComponent = memo(({ data }) => {
  return <div>{data}</div>
})
```

#### Optimiser les images
```tsx
<img 
  src="image.jpg" 
  alt="Description"
  loading="lazy"
  width={300}
  height={200}
/>
```

### ❌ À Éviter

#### Ne pas charger tout à la fois
```tsx
// ❌ Mauvais - Tout chargé
import * as pages from './pages'
```

#### Ne pas créer des re-renders inutiles
```tsx
// ❌ Mauvais - Re-render à chaque fois
const MyComponent = () => {
  const data = fetchData() // À chaque render
}
```

---

## 🔐 Sécurité

### ✅ À Faire

#### Valider les entrées utilisateur
```tsx
const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
```

#### Utiliser les variables d'environnement
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

#### Échapper les contenus dynamiques
```tsx
// React échappe automatiquement
<div>{userInput}</div>
```

### ❌ À Éviter

#### Ne pas faire confiance aux données utilisateur
```tsx
// ❌ Mauvais - Pas de validation
const handleSubmit = (data) => {
  api.post('/data', data)
}
```

#### Ne pas exposer les secrets
```tsx
// ❌ Mauvais - Secret exposé
const apiKey = 'sk_live_123456'
```

---

## 📝 Code

### ✅ À Faire

#### Utiliser des noms explicites
```tsx
const getUserEmail = () => {
  // Clair et explicite
}
```

#### Ajouter des commentaires utiles
```tsx
// Récupérer les utilisateurs actifs
const activeUsers = users.filter(u => u.isActive)
```

#### Utiliser TypeScript
```tsx
interface User {
  id: number
  name: string
  email: string
}

const getUser = (id: number): User => {
  // Implémentation
}
```

### ❌ À Éviter

#### Ne pas utiliser des noms vagues
```tsx
// ❌ Mauvais
const getData = () => {}
const x = 5
```

#### Ne pas laisser du code commenté
```tsx
// ❌ Mauvais
// const oldFunction = () => {}
// const anotherOldFunction = () => {}
```

---

## 🧪 Tests

### ✅ À Faire

#### Tester les composants
```tsx
import { render, screen } from '@testing-library/react'

test('Button renders correctly', () => {
  render(<Button label="Click me" />)
  expect(screen.getByText('Click me')).toBeInTheDocument()
})
```

#### Tester les hooks
```tsx
import { renderHook } from '@testing-library/react'

test('useThemeColors returns colors', () => {
  const { result } = renderHook(() => useThemeColors())
  expect(result.current.primary).toBeDefined()
})
```

### ❌ À Éviter

#### Ne pas ignorer les tests
```tsx
// ❌ Mauvais - Pas de tests
const MyComponent = () => {}
```

---

## 🎯 Accessibilité

### ✅ À Faire

#### Ajouter des labels aux inputs
```tsx
<label htmlFor="email">Email</label>
<input id="email" type="email" />
```

#### Utiliser les attributs ARIA
```tsx
<button aria-label="Menu utilisateur">
  ⋮
</button>
```

#### Tester le contraste
```
Ratio minimum: 4.5:1 pour le texte
Ratio minimum: 3:1 pour les éléments interactifs
```

### ❌ À Éviter

#### Ne pas ignorer l'accessibilité
```tsx
// ❌ Mauvais - Pas d'alt text
<img src="image.jpg" />
```

#### Ne pas utiliser des couleurs seules
```tsx
// ❌ Mauvais - Couleur seule
<div style={{color: 'red'}}>Erreur</div>
```

---

## 📚 Documentation

### ✅ À Faire

#### Documenter les composants
```tsx
/**
 * Composant Card
 * 
 * @example
 * <Card>
 *   <CardBody>Contenu</CardBody>
 * </Card>
 */
```

#### Maintenir le README
```markdown
# eKandra

Description du projet
```

#### Ajouter des commentaires
```tsx
// Récupérer les utilisateurs actifs
const activeUsers = users.filter(u => u.isActive)
```

### ❌ À Éviter

#### Ne pas laisser le code sans documentation
```tsx
// ❌ Mauvais - Pas de documentation
const complexFunction = () => {}
```

---

## 🚀 Déploiement

### ✅ À Faire

#### Vérifier avant de déployer
```bash
npm run lint
npm run build
npm run preview
```

#### Utiliser les variables d'environnement
```bash
VITE_API_URL=https://api.example.com
```

#### Monitorer les erreurs
```tsx
try {
  // Code
} catch (error) {
  console.error('Erreur:', error)
  // Envoyer à un service de monitoring
}
```

### ❌ À Éviter

#### Ne pas déployer sans tester
```bash
# ❌ Mauvais
npm run build && deploy
```

#### Ne pas exposer les secrets
```bash
# ❌ Mauvais
VITE_API_KEY=sk_live_123456
```

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23

