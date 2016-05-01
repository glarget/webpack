Bonjour,

En vue de ce test, j'ai essayé de ne pas utiliser un framework css (bootstrap, skeletton ou autre). Par contre, je m'en suis inspiré pour recréer les "helpers" css. (cf fichierh helpers.css)

L'idée pour moi a été de réaliser ce test en effectuant les choses from scratch.


NB : /!\ Pour voir le rendu du test => aller sur http://www.guillaumelarget.com/starwars /!\


1) Mise en forme RWD => développement sans framework. Tout n'est pas forcément parfait niveau mise en forme mais vous avez l'essentiel.

2) Parallax 

Pour le parallax, j'ai utilisé une fonction avec des paramètres pour le faire fonctionner à la fois sur le header et le footer. 
J'aurais pu créer une instanciation avec un new() mais il m'a semblé inutile de le faire (cf fichier main.js)

3) Script Asynchrome d'un JSON

====>  NB: /!\ Pour que cela fonctionne correctement en mode local, il faut placer le fichier json sur un serveur local et changer l'url d'appel du fichier /!\

=> utilisation de la méthode $.ajax de jquery
=> volonté de modulariser la fonction pour l'utiliser avec d'autres paramètres (cf paramètres "options" de la méthode getJsonFile() qui est en fait un objet d'options)
=> je ne savais pas trop quoi mettre en fail alors j'ai juste mis un console.log si jamais le json n'arrive pas à se télécharger

4) Menu qui reste figé : j'ai traité le travail à moitié car je n'ai pas trop bien compris ce qu'il fallait faire. J'ai donc placé le menu en position : fixed

***********************************************************************************************************************************************************************************************************************
Côté js :

NB : notation commentaire js => JS DOC
   : utilisation du mode strict js
   
Côté CSS :

NB : pas d'utilisation de préprocesseurs (SASS, LESS). Je suis resté simple à ce niveau là.
NB : pictos twitter, facebook et instagram => utilisation de sprites (cf pictos.png)
**************************************************************************************************************************************************************************************************************************