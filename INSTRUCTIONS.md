# Configuration de Shadcn

### 💡 Comprendre et utiliser `Shadcn`

## 📝 Tes notes

Détaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Pour la suite des exercices nous allons utiliser `Shadcn UI`.

**`Shadcn UI`** n’est pas une librairie mais est une collection de composants réutilisables. Il est basé sur `Radix-ui`, une librairie qui se focus sur l’accessibilité et non stylisée par défaut. Pour les icônes, il utilise **`Lucide`.** Pour l’ensemble des composants, certains se basent sur des librairies déjà existantes et populaires.
**`Shadcn UI`** te permet de garder le contrôle sur le code qu’il te fournit. Il est utilisé en combinaison avec `Tailwind` pour le CSS.

- Exemple d’utilisation:

```jsx
import {Button} from '@/components/ui/button'

export function ButtonDemo() {
  return <Button>Button</Button>
}
```

📑 Le lien vers la doc [https://ui.shadcn.com](https://ui.shadcn.com/)

Nous reviendrons plus en détail plus tard sur la configuration et l’utilisation de `shadcn`.

Nous avons ici préconfiguré le projet en suivant la documentation. [https://ui.shadcn.com/docs/installation/next](https://ui.shadcn.com/docs/installation/next)

```tsx
npx shadcn-ui@latest init
```

Nous avons ensuite configuré la gestion du thème et `darkmode`.

- [https://ui.shadcn.com/docs/theming](https://ui.shadcn.com/docs/theming)
- [https://ui.shadcn.com/docs/dark-mode](https://ui.shadcn.com/docs/dark-mode)

## Exercice

Implémente `Shadcn` et le système de sélection de thèmes

`shadcn` étant configuré avec le composant `Toogle` permettant de gérer le `darkmode`, tu vas devoir l’utiliser sur la page d’accueil et de l’application. Tu vas devoir modifier le Root `Layout` pour que le thème de `Shadcn` soit pris en compte ainsi que la page d’accueil.

Suis simplement les instructions dans `page.exercice.tsx` et `layout.exercice.tsx`

Fichiers

- `src/app/page.exercice.tsx`
- `src/app/layout.exercice.tsx`

## Bonus

### 1. 🚀 Gère les images en fonction du thème

Lors du changement de thème il faut une image adapté aux thème. Il y a 2 images pour le logo `next-mastery` dans le dossier `public`

**🐶 Utilise les propriétés css suivantes :**

```tsx
block dark:hidden
hidden dark:block
```

### 2. 🚀 Change le style de **Shadcn**

Lors de l’initialisation de `Shadcn`, un fichier de configuration est créé `components.json`. Il est possible de modifier certaines configurations.

**🐶 Dans cet exercice tu vas devoir modifier le style par défaut par `“**new-york”`

```tsx
  "style": "new-york",
```

<aside>
💡

Amuse toi avec `baseColor`

</aside>

Fichiers

- `components.json`

## Aller plus loin

📑 Le lien vers la doc [https://ui.shadcn.com/docs](https://ui.shadcn.com/docs)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=03.RSC%20Data%20fetch&entry.533578441=01%20Shadcn).
