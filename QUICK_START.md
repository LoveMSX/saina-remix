# 🚀 Quick Start - eKandra

## Installation Rapide

### 1. Cloner le projet
```bash
git clone <repository-url>
cd eSaina
```

### 2. Installer les dépendances
```bash
npm install
# ou
yarn install
```

### 3. Démarrer le serveur de développement
```bash
npm run dev
# ou
yarn dev
```

### 4. Ouvrir dans le navigateur
```
http://localhost:5173/
```

## 📁 Structure du Projet

```
src/
├── components/          # Composants réutilisables
├── pages/              # Pages de l'application
├── hooks/              # Hooks personnalisés
├── context/            # Context API
├── services/           # Services et factories
├── constants/          # Constantes (couleurs, etc.)
├── interfaces/         # Types TypeScript
├── data/               # DTOs
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
      color: colors.text
    }}>
      Contenu
    </div>
  )
}
```

### Couleurs Disponibles
- `primary` - Cyan (#0ea5e9)
- `secondary` - Vert (#A7C85C)
- `accent` - Vert vibrant (#22c55e)
- `primaryBackground` - Blanc (#ffffff)
- `secondaryBackground` - Gris clair (#f8fafc)
- `text` - Gris foncé (#1f2937)
- `textSecondary` - Gris moyen (#6b7280)
- `border` - Bordure (#e5e7eb)
- `success`, `warning`, `error`, `info`

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
  validate,
  reset
} = useForm(initialValues, onValidate)
```

### UseAuth
```tsx
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

### Utilisation
```jsx
<div className="bg-primary text-white p-4 rounded-lg shadow-lg">
  Contenu
</div>
```

### Couleurs Personnalisées
```jsx
<div className="bg-ekandra-green text-ekandra-blue">
  Contenu
</div>
```

## 🔧 Commandes Utiles

### Développement
```bash
npm run dev      # Démarrer le serveur
npm run build    # Build production
npm run lint     # Linter le code
npm run preview  # Prévisualiser le build
```

### Installation de Dépendances
```bash
npm install <package>           # Ajouter une dépendance
npm install -D <package>        # Ajouter une dépendance dev
npm uninstall <package>         # Supprimer une dépendance
```

## 📚 Documentation

- `UI_IMPROVEMENTS.md` - Vue d'ensemble des améliorations
- `STYLE_GUIDE.md` - Guide de style complet
- `DEVELOPMENT_GUIDE.md` - Guide de développement détaillé
- `CHANGELOG.md` - Historique des changements

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

## 🚀 Build et Déploiement

### Build Production
```bash
npm run build
```

### Fichiers Générés
- `dist/` - Fichiers optimisés pour production

## 📦 Dépendances Principales

- React 19.1.0
- React Router 7.7.0
- Tailwind CSS 4.1.15
- TypeScript 5.8.3
- Vite 7.0.4

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

## 🆘 Troubleshooting

### Le serveur ne démarre pas
```bash
# Nettoyer les dépendances
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

## 📞 Support

Pour plus d'informations:
- Consulter la documentation dans les fichiers .md
- Vérifier les commentaires dans le code
- Utiliser React DevTools pour déboguer

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23  
**Thème**: Publication et partage des actualités en IA

