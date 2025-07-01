# Ollama Next.js Chat UI

![Langage](https://img.shields.io/badge/language-TypeScript-blue.svg)
![Framework](https://img.shields.io/badge/framework-Next.js-black.svg)
![Style](https://img.shields.io/badge/style-TailwindCSS-38B2AC.svg)
![Licence](https://img.shields.io/badge/license-MIT-green.svg)

Une interface de chat web complète, moderne et open-source pour interagir avec vos grands modèles de langage (LLM) locaux via **Ollama**. Profitez d'une expérience de chat privée, rapide et fluide, directement dans votre navigateur.

![Aperçu de l'application Ollama Chat UI](https://raw.githubusercontent.com/ollama/ollama-webui/main/screenshot.png)
*(Note: L'image ci-dessus est un exemple d'interface ; remplacez-la par une capture d'écran de votre application une fois terminée.)*

## ✨ Fonctionnalités

*   **🤖 Chat en temps réel :** Discutez avec n'importe quel modèle supporté par Ollama.
*   **⚡️ Réponses en Streaming :** Les réponses de l'IA s'affichent mot par mot pour une expérience utilisateur instantanée.
*   **🧠 Sélection de Modèles :** Changez de modèle à la volée grâce à un menu déroulant qui liste automatiquement vos modèles locaux.
*   **🔒 100% Privé :** Toutes les requêtes sont traitées entre votre navigateur et votre serveur Ollama local. Aucune donnée ne quitte votre machine.
*   **📝 Support du Markdown :** Les réponses sont formatées avec le support complet du Markdown, y compris les blocs de code avec coloration syntaxique et un bouton "Copier".
*   **🚀 Architecture Moderne :** Construit avec le **Next.js App Router**, garantissant des performances optimales et une expérience de développement moderne.
*   **🎨 UI Élégante :** Interface épurée et responsive construite avec **Tailwind CSS** et **shadcn/ui**.

## 🛠️ Stack Technique

*   **Framework :** [Next.js](https://nextjs.org/) (App Router)
*   **Langage :** [TypeScript](https://www.typescriptlang.org/)
*   **Style :** [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
*   **IA Backend :** [Ollama](https://ollama.com/)
*   **Rendu Markdown :** `react-markdown` & `react-syntax-highlighter`

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

1.  **[Node.js](https://nodejs.org/en/)** (version 18.0 ou supérieure)
2.  **[Ollama](https://ollama.com/)** installé et en cours d'exécution.

Pour vérifier qu'Ollama fonctionne, ouvrez votre terminal et exécutez :
```bash
ollama --version
```

Assurez-vous également d'avoir téléchargé au moins un modèle. Par exemple, pour télécharger Llama 3 :
```bash
ollama run llama3
```

## 🚀 Démarrage Rapide

Suivez ces étapes pour lancer l'application localement :

1.  **Clonez le dépôt :**
    ```bash
    git clone https://github.com/djascorp/OllamaChatUI.git
    cd OllamaChatUI
    ```

2.  **Installez les dépendances :**
    ```bash
    npm install
    # ou yarn install, ou pnpm install
    ```

3.  **Configurez les variables d'environnement :**
    Créez un fichier `.env.local` à la racine du projet en copiant le fichier `.env.example` :
    ```bash
    cp .env.example .env.local
    ```
    Le fichier `.env.local` contiendra l'URL de base de votre serveur Ollama. La valeur par défaut est généralement correcte.
    ```env
    # .env.local
    OLLAMA_API_BASE_URL=http://localhost:11434
    ```

4.  **Lancez le serveur de développement :**
    ```bash
    npm run dev
    ```

5.  **Ouvrez votre navigateur :**
    Rendez-vous sur [http://localhost:3000](http://localhost:3000) et commencez à discuter avec vos modèles locaux !

## 🏗️ Structure du Projet

Voici un aperçu des fichiers et dossiers importants du projet :

```
/
├── app/
│   ├── layout.tsx         # Layout principal de l'application
│   ├── page.tsx           # Page d'accueil qui rend le client de chat
│   └── api/
│       └── chat/
│           └── route.ts   # API Route (proxy) qui communique avec Ollama
│
├── components/
│   └── ChatClient.tsx     # Le composant principal gérant l'UI et la logique du chat
│
├── lib/
│   ├── utils.ts           # Fonctions utilitaires (ex: pour shadcn/ui)
│   └── types.ts           # Définitions des types TypeScript
│
├── .env.local             # Vos variables d'environnement locales (non versionnées)
├── next.config.mjs        # Configuration de Next.js
└── package.json           # Dépendances et scripts du projet
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Si vous souhaitez améliorer ce projet, n'hésitez pas à :
1.  Forker le dépôt.
2.  Créer une nouvelle branche (`git checkout -b feature/nouvelle-fonctionnalite`).
3.  Faire vos modifications.
4.  Soumettre une Pull Request.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.