# 🚀 eKandra - Publication et Partage des Actualités en IA

<div align="center">

![eKandra](https://img.shields.io/badge/eKandra-v1.0-blue)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.15-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)

**Une application moderne pour publier et partager les dernières actualités et meilleures pratiques en Intelligence Artificielle**

[Démarrage Rapide](#-démarrage-rapide) • [Documentation](#-documentation) • [Fonctionnalités](#-fonctionnalités) • [Contribution](#-contribution)

</div>

---

## ✨ Fonctionnalités

### 🎨 Interface Moderne et Élégante
- Design contemporain avec Tailwind CSS v4
- Palette de couleurs riche et cohérente
- Animations fluides et transitions élégantes
- Responsive design sur tous les appareils

### 📱 Pages Principales
- **Connexion** - Authentification sécurisée avec Google OAuth
- **Accueil** - Vue d'ensemble avec statistiques et articles à la une
- **Actualités** - Grille de news avec recherche et filtres
- **Messages** - Interface de chat moderne

### 🔐 Sécurité
- Authentification Google OAuth
- Gestion sécurisée des données utilisateur
- Variables d'environnement pour les secrets

### ⚡ Performance
- Build optimisé avec Vite
- Lazy loading des composants
- Code splitting automatique
- HMR (Hot Module Replacement)

---

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation

```bash
# Cloner le repository
git clone <repository-url>
cd eSaina

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Accédez à l'application sur `http://localhost:5173/`

### Commandes Disponibles

```bash
# Développement
npm run dev          # Démarrer le serveur
npm run build        # Build production
npm run preview      # Prévisualiser le build
npm run lint         # Linter le code
```

---

## 📚 Documentation

Consultez la documentation complète:

| Document | Description |
|----------|-------------|
| [INDEX.md](./INDEX.md) | Index de toute la documentation |
| [QUICK_START.md](./QUICK_START.md) | Guide de démarrage rapide |
| [STYLE_GUIDE.md](./STYLE_GUIDE.md) | Guide de style et design |
| [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md) | Guide de développement |
| [BEST_PRACTICES.md](./BEST_PRACTICES.md) | Bonnes pratiques |
| [COMMANDS.md](./COMMANDS.md) | Commandes utiles |
| [FAQ.md](./FAQ.md) | Questions fréquemment posées |
| [RESOURCES.md](./RESOURCES.md) | Ressources externes |
| [CHANGELOG.md](./CHANGELOG.md) | Historique des changements |
| [SUMMARY.md](./SUMMARY.md) | Résumé des améliorations |

---

## 🏗️ Architecture

### Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── form/           # Composants de formulaire
│   ├── navBar/         # Barre de navigation
│   ├── card/           # Cartes
│   └── ...
├── pages/              # Pages de l'application
│   ├── login/          # Page de connexion
│   ├── home/           # Page d'accueil
│   ├── news/           # Page des actualités
│   ├── message/        # Page des messages
│   └── layout/         # Layouts
├── hooks/              # Hooks personnalisés
├── context/            # Context API
├── services/           # Services et factories
├── constants/          # Constantes
├── interfaces/         # Types TypeScript
├── data/               # DTOs
└── types/              # Types globaux
```

### Stack Technologique

- **Frontend**: React 19.1.0 + TypeScript 5.8.3
- **Build Tool**: Vite 7.0.4
- **Styling**: Tailwind CSS 4.1.15
- **Routing**: React Router 7.7.0
- **Authentication**: Google OAuth

---

## 🎨 Système de Couleurs

### Palette Principale

```
Primaire:        #0ea5e9 (Cyan)
Accent:          #22c55e (Vert)
Secondaire:      #A7C85C (Vert eKandra)
Texte:           #1f2937 (Gris foncé)
Arrière-plan:    #ffffff (Blanc)
Bordures:        #e5e7eb (Gris clair)
```

---

## 🚀 Déploiement

### Build Production
```bash
npm run build
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

## 📞 Support

### Besoin d'Aide?
- 📖 Consultez la [documentation complète](./INDEX.md)
- ❓ Vérifiez les [FAQ](./FAQ.md)
- 🔍 Utilisez [React DevTools](https://react-devtools-tutorial.vercel.app)

---

## 🙏 Remerciements

Merci à tous les contributeurs et à la communauté React/TypeScript pour leur soutien!

---

<div align="center">

**Fait avec ❤️ pour la communauté IA**

</div>

---

**Version**: 1.0
**Dernière mise à jour**: 2025-10-23
**Thème**: Publication et partage des actualités en IA
