# 👨‍💻 Guide de Développement - eKandra

## 🚀 Démarrage Rapide

### Installation
```bash
# Installer les dépendances
npm install
# ou
yarn install

# Démarrer le serveur de développement
npm run dev
# ou
yarn dev
```

### Build
```bash
npm run build
# ou
yarn build
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── card/           # Composant Card
│   ├── form/           # Composants de formulaire
│   ├── navBar/         # Barre de navigation
│   ├── column/         # Layout Column
│   ├── row/            # Layout Row
│   └── spinner/        # Spinner de chargement
├── pages/              # Pages de l'application
│   ├── login/          # Page de connexion
│   ├── home/           # Page d'accueil
│   ├── news/           # Page des actualités
│   ├── message/        # Page des messages
│   └── layout/         # Layout principal
├── hooks/              # Hooks personnalisés
│   ├── form/           # Hook de formulaire
│   └── theme/          # Hook de thème
├── context/            # Context API
│   └── user/           # Context utilisateur
├── services/           # Services et factories
│   └── factory/        # Factories
├── constants/          # Constantes
│   └── colors.ts       # Palette de couleurs
├── interfaces/         # Types TypeScript
├── data/               # DTOs et données
├── types/              # Types globaux
├── index.css           # Styles globaux
└── main.tsx            # Point d'entrée
```

## 🎨 Système de Couleurs

### Utilisation dans les Composants
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

### Ajouter de Nouvelles Couleurs
Modifier `src/constants/colors.ts`:
```typescript
export const Colors = {
  light: {
    // Ajouter ici
    newColor: '#hexcode',
  },
  dark: {
    // Ajouter ici
    newColor: '#hexcode',
  }
}
```

## 🧩 Composants Principaux

### Card
```tsx
import { Card, CardHeader, CardBody, CardFooter } from '../../components/card'

<Card>
  <CardHeader>Titre</CardHeader>
  <CardBody>Contenu</CardBody>
  <CardFooter>Pied de page</CardFooter>
</Card>
```

### Form
```tsx
import GenericForm from '../../components/form'

<GenericForm
  fields={fields}
  initialValues={initialValues}
  title="Titre"
  submitText="Soumettre"
  onSubmit={handleSubmit}
  onValidate={validateForm}
/>
```

### NavBar
```tsx
import { NavBar } from '../../components/navBar'

<NavBar navItems={navItems} />
```

## 🎯 Hooks Personnalisés

### useThemeColors
```tsx
const colors = useThemeColors()
// Retourne les couleurs du thème actuel
```

### useForm
```tsx
const {
  values,
  errors,
  touched,
  setValue,
  setTouchedField,
  validate,
  reset
} = useForm(initialValues, onValidate)
```

## 🔄 Context API

### UseAuth
```tsx
import { UseAuth } from '../../context/user'

const { user, login, logout } = UseAuth()
```

## 📝 Ajouter une Nouvelle Page

1. Créer le fichier dans `src/pages/`
2. Importer les composants nécessaires
3. Utiliser `useThemeColors()` pour les couleurs
4. Ajouter la route dans `src/router/`

Exemple:
```tsx
import { useThemeColors } from '../../hooks/theme'
import Column from '../../components/column'

const NewPage = () => {
  const colors = useThemeColors()
  
  return (
    <Column style={{flex: 1, padding: '2rem'}}>
      {/* Contenu */}
    </Column>
  )
}

export default NewPage
```

## 🎨 Tailwind CSS

### Configuration
- Fichier: `tailwind.config.js`
- Couleurs personnalisées disponibles
- Animations et keyframes custom

### Utilisation
```jsx
<div className="bg-primary text-white p-4 rounded-lg shadow-lg">
  Contenu
</div>
```

### Ajouter des Styles Personnalisés
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

## 🧪 Bonnes Pratiques

### Composants
- ✅ Utiliser des composants réutilisables
- ✅ Passer les couleurs via `useThemeColors()`
- ✅ Utiliser des props pour la flexibilité
- ✅ Documenter les props avec JSDoc

### Styles
- ✅ Utiliser Tailwind CSS quand possible
- ✅ Utiliser les couleurs du système
- ✅ Respecter l'espacement standard
- ✅ Ajouter des transitions fluides

### Performance
- ✅ Lazy load les pages
- ✅ Mémoriser les composants si nécessaire
- ✅ Optimiser les images
- ✅ Utiliser le code splitting

## 🐛 Débogage

### Console
```tsx
console.log('Debug:', value)
```

### React DevTools
- Installer l'extension React DevTools
- Inspecter les props et state

### Vite DevTools
- Console Ninja intégrée
- HMR (Hot Module Replacement)

## 📦 Dépendances Principales

- **React**: 19.1.0
- **React Router**: 7.7.0
- **Tailwind CSS**: 4.1.15
- **TypeScript**: 5.8.3
- **Vite**: 7.0.4

## 🚀 Déploiement

### Build Production
```bash
npm run build
```

### Fichiers Générés
- `dist/` - Fichiers optimisés pour production

## 📚 Ressources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev)

## 💡 Tips & Tricks

### Réutiliser les Couleurs
```tsx
const colors = useThemeColors()
const buttonStyle = {
  backgroundColor: colors.primary,
  color: colors.primaryBackground
}
```

### Animations Fluides
```tsx
style={{
  transition: 'all 0.3s ease',
  transform: 'translateY(-2px)'
}}
```

### Responsive Design
```tsx
style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '1.5rem'
}}
```

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23

