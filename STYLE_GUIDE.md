# 🎨 Guide de Style - eKandra

## Palette de Couleurs

### Couleurs Primaires
| Couleur | Code | Utilisation |
|---------|------|-------------|
| Cyan | `#0ea5e9` | Boutons, liens, accents |
| Vert | `#22c55e` | Succès, accents secondaires |
| Vert eKandra | `#A7C85C` | Branding legacy |
| Bleu eKandra | `#56A8DD` | Branding legacy |

### Couleurs Neutres
| Couleur | Code | Utilisation |
|---------|------|-------------|
| Blanc | `#ffffff` | Arrière-plan principal |
| Gris clair | `#f8fafc` | Arrière-plans secondaires |
| Gris moyen | `#e5e7eb` | Bordures |
| Gris foncé | `#1f2937` | Texte principal |
| Gris texte | `#6b7280` | Texte secondaire |

### Couleurs de Statut
| Statut | Code | Utilisation |
|--------|------|-------------|
| Succès | `#22c55e` | Messages positifs |
| Avertissement | `#f59e0b` | Alertes |
| Erreur | `#ef4444` | Erreurs, danger |
| Info | `#0ea5e9` | Informations |

## Typographie

### Familles de Polices
```css
/* Titres */
font-family: 'Poppins', system-ui, sans-serif;
font-weight: 600-800;

/* Corps */
font-family: 'Inter', system-ui, sans-serif;
font-weight: 400-600;
```

### Hiérarchie des Tailles
```
H1: 2.5rem (40px) - Titres principaux
H2: 2rem (32px) - Titres secondaires
H3: 1.75rem (28px) - Sous-titres
H4: 1.5rem (24px) - Titres de section
Body: 1rem (16px) - Texte normal
Small: 0.875rem (14px) - Texte secondaire
Tiny: 0.75rem (12px) - Labels, badges
```

## Espacement

### Système de Spacing
```
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
```

### Padding Standard
- Cartes: `1rem` (16px)
- Sections: `1.5rem` (24px)
- Conteneurs: `2rem` (32px)

### Gap Standard
- Éléments: `0.75rem` (12px)
- Sections: `1.5rem` (24px)
- Colonnes: `2rem` (32px)

## Composants

### Boutons
```
Primaire:
- Background: #0ea5e9
- Color: #ffffff
- Padding: 0.875rem 1.5rem
- Border-radius: 0.75rem
- Font-weight: 600

Secondaire:
- Background: transparent
- Border: 2px solid #0ea5e9
- Color: #0ea5e9
- Padding: 0.875rem 1.5rem
- Border-radius: 0.75rem
```

### Inputs
```
- Background: #f9fafb
- Border: 1.5px solid #e5e7eb
- Padding: 0.75rem 1rem
- Border-radius: 0.75rem
- Focus: Border #0ea5e9, Shadow rgba(14, 165, 233, 0.1)
```

### Cartes
```
- Background: #ffffff
- Border: 1px solid #e5e7eb
- Border-radius: 0.5rem
- Box-shadow: 0 2px 6px rgba(0,0,0,.08)
- Padding: 1rem
```

### Badges
```
- Padding: 0.375rem 0.75rem
- Border-radius: 0.5rem
- Font-size: 0.75rem
- Font-weight: 600
- Background: color20% (20% opacity)
```

## Ombres

### Système d'Ombres
```
xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
sm: 0 1px 3px 0 rgba(0, 0, 0, 0.1)
md: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1)
xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
glow: 0 0 20px rgba(10, 165, 233, 0.3)
```

## Animations

### Transitions Standard
```css
transition: all 0.3s ease;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animations Disponibles
- `fade-in`: 0.5s ease-in-out
- `slide-up`: 0.5s ease-out
- `pulse-glow`: 2s cubic-bezier(0.4, 0, 0.6, 1) infinite

## Responsive Design

### Breakpoints
```
Mobile: < 640px
Tablet: 640px - 1024px
Desktop: > 1024px
```

### Règles
- Mobile-first approach
- Sidebars masqués sur mobile
- Navigation adaptative
- Grilles fluides

## Accessibilité

### Contraste
- Texte sur fond: Ratio minimum 4.5:1
- Éléments interactifs: Ratio minimum 3:1

### Focus States
- Tous les éléments interactifs ont des focus states visibles
- Outline: 2px solid #0ea5e9

### Texte Alternatif
- Toutes les images ont des alt texts
- Les icônes ont des labels ARIA

## Utilisation avec Tailwind CSS

### Classes Utiles
```html
<!-- Couleurs -->
<div class="bg-primary text-white"></div>
<div class="border border-gray-200"></div>

<!-- Espacement -->
<div class="p-4 m-2 gap-3"></div>

<!-- Typographie -->
<h1 class="text-4xl font-bold"></h1>
<p class="text-sm text-gray-600"></p>

<!-- Ombres -->
<div class="shadow-lg"></div>

<!-- Animations -->
<div class="transition-all duration-300"></div>
```

## Exemples de Composants

### Carte Moderne
```jsx
<Card style={{
  backgroundColor: colors.primaryBackground,
  borderRadius: '0.75rem',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  padding: '1rem'
}}>
  <CardBody>Contenu</CardBody>
</Card>
```

### Bouton Primaire
```jsx
<button style={{
  backgroundColor: colors.primary,
  color: '#ffffff',
  padding: '0.875rem 1.5rem',
  borderRadius: '0.75rem',
  fontWeight: 600,
  border: 'none',
  cursor: 'pointer'
}}>
  Action
</button>
```

---

**Version**: 1.0  
**Dernière mise à jour**: 2025-10-23

