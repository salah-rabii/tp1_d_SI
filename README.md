# Rapport TP1 : Déploiement d'une Application dans le Cloud

**Étudiant :** [Votre Nom]  
**Date :** [Date]  
**Plateforme :** Render / GitHub Pages / Netlify  
**Matière :** Management et Gouvernance des Systèmes d'Information

---

## 1. Lien Public de l'Application Déployée

```
https://tp1-app.onrender.com
```
**ou**
```
https://salah-rabii.github.io/tp1-app
```

---

## 2. Captures d'Écran des Étapes de Configuration et Déploiement

### Étape 1 : Création du Repo GitHub
- [Ajouter screenshot du repo GitHub]
- Description : Le code source (index.html, style.css, script.js) est hébergé sur GitHub

### Étape 2 : Configuration sur Render
- [Ajouter screenshot de la page de configuration]
- Paramètres configurés :
  - **Name** : 3tini-app
  - **Language** : Static Site
  - **Branch** : main
  - **Region** : Oregon (US West)

### Étape 3 : Déploiement en cours
- [Ajouter screenshot du déploiement]
- Status : Build in progress

### Étape 4 : Déploiement réussi
- [Ajouter screenshot du succès]
- URL générée : https://3tini-app.onrender.com

---

## 3. Captures d'Écran des Métriques Cloud

### RAM Utilisée
- [Ajouter screenshot des métriques RAM]
- **Valeur observée** : ~15-20 MB
- **Justification** : Application simple sans backend, ressources minimales

### CPU Utilisé
- [Ajouter screenshot du CPU]
- **Valeur observée** : ~2-5% (au repos)
- **Pic** : ~10-15% lors des interactions utilisateur

### Stockage Disque
- [Ajouter screenshot du stockage]
- **Valeur observée** : ~5-10 MB
- **Composition** : HTML, CSS, JS files + système de fichiers minimal

---

## 4. Réponses aux Questions de Comparaison

### Question 1 : Comparaison Cloud vs Environnement Local

#### A. Technologies et Infrastructure Nécessaires

**Environnement Local :**
- Ordinateur personnel (laptop/desktop)
- Système d'exploitation (Windows, macOS, Linux)
- Navigateur web
- Éditeur de code (VS Code, Sublime Text, etc.)
- Git installé localement
- Coûts matériels : 500€ - 2000€

**Environnement Cloud (Render) :**
- Serveurs distants gérés par Render
- Infrastructure virtualisée (VPS)
- Équilibreur de charge
- CDN intégré
- SSL/HTTPS automatique
- Monitoring et logs centralisés
- Coûts : Gratuit (free tier) ou pay-as-you-go

**Différences principales :**
| Aspect | Local | Cloud |
|--------|-------|-------|
| Hardware | Vous achetez | Loué à Render |
| Maintenance | À votre charge | Gérée par Render |
| Disponibilité | 24/7 = énergie H24 | 24/7 inclus |
| Scalabilité | Limitée au hardware | Illimitée |
| Coût initial | Élevé (~1000€) | Zéro |

#### B. Compétences Humaines Requises

**Environnement Local :**
- Connaissances en administration système
- Gestion des certificats SSL
- Configuration firewall/routeur
- Maintenance matérielle (disque dur, refroidissement, etc.)
- Sauvegardes manuelles
- Expertise : 5-10 ans expérience système

**Environnement Cloud (Render) :**
- Connaissances Git/GitHub
- Compréhension basique du web (HTTP/HTTPS)
- Notions de CI/CD
- Monitoring et logging
- Expertise : 1-2 ans développement web

**Comparaison :**
| Compétence | Local | Cloud |
|------------|-------|-------|
| DevOps | Essentiel | Basique |
| Administration Système | Requise | Pas nécessaire |
| Git/Version Control | Utile | Essentiel |
| Scalabilité | Difficile | Simple |
| Temps d'apprentissage | 6-12 mois | 1-2 semaines |

---

## 5. Analyse et Conclusion

### Avantages du Cloud (Render)
✅ Déploiement facile et rapide (< 5 minutes)  
✅ Pas d'infrastructure locale à gérer  
✅ Accessible depuis n'importe où  
✅ Scalabilité automatique  
✅ SSL/HTTPS gratuit  
✅ Monitoring intégré  

### Inconvénients du Cloud
❌ Dépendance du provider (Render)  
❌ Risques de downtime du provider  
❌ Coûts peuvent augmenter avec la scalabilité  
❌ Contrôle moins direct sur l'infrastructure  

### Conclusion
Pour une application simple comme 3tini-app, **le Cloud (Render) est clairement supérieur** au déploiement local. Les ressources utilisées sont minimales (15-20 MB RAM), et la facilité de déploiement justifie complètement l'utilisation d'une plateforme IaaS comme Render.

---

## 6. Annexes

### Structure du Projet
```
3tini-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Commandes Git utilisées
```bash
git init
git add .
git commit -m "Initial commit - 3tini app"
git push origin main
```

### Résumé des Technologies utilisées
- **Frontend** : HTML5, CSS3, JavaScript (Vanilla)
- **Hosting** : Render (IaaS)
- **Version Control** : Git / GitHub (PaaS)
- **Runtime** : Navigateur web (client-side)