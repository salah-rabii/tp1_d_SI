# Rapport TP1 : Déploiement d'une Application dans le Cloud

**Étudiant :** RABII SALAH EDDINE
**Date :** 27/11/2025
**Plateforme :**  GitHub Pages / Vercel  
**Matière :** Management et Gouvernance des Systèmes d'Information

---

## 1. Lien Public de l'Application Déployée

```
https://tp1gsi.vercel.app/
```

---

## 2. Captures d'Écran des Étapes de Configuration et Déploiement

### Étape 1 : Création du Repo GitHub
![Git - création du repo](tp1_g_si/git.png)
![Repository GitHub](tp1_g_si/github.png)

- Description : Le code source (index.html, style.css, script.js) est hébergé sur GitHub

### Étape 2 : Configuration sur vercel
![Connexion vercel à GitHub](tp1_g_si/connect_with_github.png)
- Paramètres configurés :
  - **Name** : tp1gsi
  - **Language** : Static Site
  - **Branch** : main

### Étape 3 : Déploiement en cours
![Déploiement en cours](tp1_g_si/deploy_encours.png)

### Étape 4 : Déploiement réussi
![Déploiement réussi - vercel](tp1_g_si/deploy_succes1.png)
![Déploiement réussi - vercel](tp1_g_si/deploy_succes.png)
![Application - aperçu](tp1_g_si/application.png)
- URL générée : https://tp1gsi.vercel.app/

---

## 3. Captures d'Écran des Métriques Cloud
![Métrique 1](tp1_g_si/c1.png)
![Métrique 2](tp1_g_si/c2.png)
![Métrique 3](tp1_g_si/c3.png)
![Métrique 4](tp1_g_si/c4.png)
![Métrique 5](tp1_g_si/c5.png)


---

## 4. Réponses aux Questions de Comparaison

### Question 1 : Comparaison Cloud vs Environnement Local

#### A. Technologies et Infrastructure Nécessaires

**Environnement Local :**
- Ordinateur personnel (laptop/desktop)
- Système d'exploitation (Windows, macOS, Linux)
- Éditeur de code (VS Code, Sublime Text, etc.)
- Git installé localement
- Coûts matériels

**Environnement Cloud (vercel) :**
- Serveurs distants gérés par vercel
- Équilibreur de charge
- Monitoring et logs centralisés
- Coûts : Gratuit ou pay-as-you-go


#### B. Compétences Humaines Requises

**Environnement Local :**
- Connaissances en administration système et reseau informatique
- Maintenance matérielle
- Sauvegardes manuelles

**Environnement Cloud (vercel) :**
- Connaissances Git/GitHub
- Monitoring et logging


---


### Commandes Git utilisées
```bash
git init
git add .
git commit -m "message"
git push origin main
```

