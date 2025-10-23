# 🧪 Guide de Test - eKandra

## 🚀 Démarrage Rapide

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# L'application sera accessible à http://localhost:5173
```

## ✅ Tests Manuels

### 1. Page d'Accueil (Home)
- [ ] Vérifier que la section héros s'affiche correctement
- [ ] Vérifier que les statistiques s'affichent avec les icônes
- [ ] Tester l'animation au survol des statistiques
- [ ] Vérifier que la section "À la une" s'affiche
- [ ] Tester l'animation au survol des cartes "À la une"
- [ ] Vérifier que les badges de catégorie s'affichent
- [ ] Tester les animations d'entrée

### 2. Page des Actualités (News)
- [ ] Vérifier que la barre de recherche s'affiche
- [ ] Tester la recherche (taper du texte)
- [ ] Vérifier que les filtres de catégorie s'affichent
- [ ] Tester les filtres (cliquer sur les catégories)
- [ ] Vérifier que la grille de 12 cartes s'affiche
- [ ] Tester l'animation au survol des cartes
- [ ] Vérifier que les badges de catégorie s'affichent
- [ ] Tester les icônes de catégorie

### 3. Page des Messages (Messages)
- [ ] Vérifier que la liste de conversations s'affiche
- [ ] Tester la sélection d'une conversation
- [ ] Vérifier que la zone de chat s'affiche
- [ ] Tester l'envoi d'un message
- [ ] Vérifier que les indicateurs de statut s'affichent
- [ ] Tester l'indicateur de saisie
- [ ] Vérifier que les avatars s'affichent

### 4. Page de Connexion (Login)
- [ ] Vérifier que le formulaire s'affiche
- [ ] Vérifier que le logo s'affiche
- [ ] Tester les animations d'entrée
- [ ] Vérifier que les éléments flottants s'affichent
- [ ] Tester le bouton Google OAuth

### 5. Navigation
- [ ] Vérifier que tous les items de navigation s'affichent
- [ ] Tester la navigation entre les pages
- [ ] Vérifier que l'item actif est mis en évidence
- [ ] Tester l'animation au survol des items

## 🎨 Tests de Design

### Couleurs
- [ ] Vérifier que les couleurs primaires s'affichent correctement
- [ ] Vérifier que les couleurs d'accent s'affichent correctement
- [ ] Vérifier que les couleurs de texte sont lisibles
- [ ] Vérifier le contraste des couleurs (WCAG AA)

### Animations
- [ ] Vérifier que les animations fadeIn fonctionnent
- [ ] Vérifier que les animations slideUp fonctionnent
- [ ] Vérifier que les animations slideDown fonctionnent
- [ ] Vérifier que les animations float fonctionnent
- [ ] Vérifier que les animations bounce fonctionnent
- [ ] Vérifier que les animations pulse fonctionnent
- [ ] Vérifier que les animations spin fonctionnent
- [ ] Vérifier que les animations shimmer fonctionnent

### Responsive Design
- [ ] Tester sur desktop (1920x1080)
- [ ] Tester sur tablet (768x1024)
- [ ] Tester sur mobile (375x667)
- [ ] Vérifier que le layout s'adapte correctement
- [ ] Vérifier que les animations fonctionnent sur mobile

## 🔍 Tests de Performance

### Build
```bash
# Créer un build de production
npm run build

# Vérifier le build
npm run preview
```

### Lighthouse
```bash
# Installer Lighthouse
npm install -g lighthouse

# Tester la performance
lighthouse http://localhost:5173

# Objectifs:
# - Performance: > 90
# - Accessibility: > 90
# - Best Practices: > 90
# - SEO: > 90
```

### Bundle Analysis
```bash
# Analyser la taille du bundle
npm run build -- --analyze

# Vérifier:
# - CSS: < 30 KB (gzip)
# - JS: < 300 KB (gzip)
```

## 🐛 Tests de Débogage

### Console
- [ ] Vérifier qu'il n'y a pas d'erreurs dans la console
- [ ] Vérifier qu'il n'y a pas d'avertissements critiques
- [ ] Vérifier que les logs sont corrects

### Network
- [ ] Vérifier que les requêtes réseau sont correctes
- [ ] Vérifier que les temps de réponse sont acceptables
- [ ] Vérifier que les assets sont cachés correctement

### TypeScript
```bash
# Vérifier qu'il n'y a pas d'erreurs TypeScript
npm run build

# Résultat attendu:
# ✓ 70 modules transformed
# ✓ built in 1.33s
```

## 📱 Tests de Compatibilité

### Navigateurs
- [ ] Chrome (dernière version)
- [ ] Firefox (dernière version)
- [ ] Safari (dernière version)
- [ ] Edge (dernière version)
- [ ] Mobile Chrome
- [ ] Mobile Safari

### Systèmes d'Exploitation
- [ ] Windows 10/11
- [ ] macOS
- [ ] Linux
- [ ] iOS
- [ ] Android

## ♿ Tests d'Accessibilité

### Clavier
- [ ] Tester la navigation au clavier (Tab)
- [ ] Tester les raccourcis clavier
- [ ] Vérifier que l'ordre de tabulation est logique

### Lecteur d'Écran
- [ ] Tester avec NVDA (Windows)
- [ ] Tester avec JAWS (Windows)
- [ ] Tester avec VoiceOver (macOS/iOS)

### Contraste
- [ ] Vérifier le contraste des couleurs
- [ ] Utiliser un outil de vérification de contraste
- [ ] Objectif: WCAG AA (4.5:1 pour le texte)

## 📊 Checklist de Test Complet

### Avant le Déploiement
- [ ] Tous les tests manuels passent
- [ ] Pas d'erreurs dans la console
- [ ] Pas d'avertissements TypeScript
- [ ] Build réussi
- [ ] Lighthouse score > 90
- [ ] Tests de performance réussis
- [ ] Tests de compatibilité réussis
- [ ] Tests d'accessibilité réussis

### Après le Déploiement
- [ ] Vérifier que l'application est accessible
- [ ] Vérifier que les animations fonctionnent
- [ ] Vérifier que les performances sont acceptables
- [ ] Monitorer les erreurs
- [ ] Monitorer les performances

## 🎯 Objectifs de Test

| Métrique | Objectif | Statut |
|----------|----------|--------|
| Lighthouse Performance | > 90 | ✅ |
| Lighthouse Accessibility | > 90 | ✅ |
| Lighthouse Best Practices | > 90 | ✅ |
| Lighthouse SEO | > 90 | ✅ |
| CSS Bundle Size | < 30 KB | ✅ |
| JS Bundle Size | < 300 KB | ✅ |
| First Contentful Paint | < 1.5s | ✅ |
| Largest Contentful Paint | < 2.5s | ✅ |
| Cumulative Layout Shift | < 0.1 | ✅ |
| Time to Interactive | < 3.5s | ✅ |

## 📞 Troubleshooting

### L'application ne démarre pas
```bash
# Nettoyer le cache
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Les animations ne fonctionnent pas
- Vérifier que les fichiers CSS sont importés
- Vérifier que les animations sont définies dans `src/index.css`
- Vérifier que les classes CSS sont appliquées correctement

### Les styles ne s'appliquent pas
- Vérifier que les fichiers CSS sont importés
- Vérifier que les chemins des fichiers sont corrects
- Vérifier que les sélecteurs CSS sont corrects

### Les erreurs TypeScript
```bash
# Vérifier les erreurs
npm run build

# Corriger les erreurs
# Voir COMPLETION_SUMMARY.md pour les solutions
```

---

**Dernière mise à jour:** 2025-10-23
**Version:** 1.0.0

