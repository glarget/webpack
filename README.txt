Bonjour,

En vue de ce test, j'ai essay� de ne pas utiliser un framework css (bootstrap, skeletton ou autre). Par contre, je m'en suis inspir� pour recr�er les "helpers" css. (cf fichierh helpers.css)

L'id�e pour moi a �t� de r�aliser ce test en effectuant les choses from scratch.


NB : /!\ Pour voir le rendu du test => aller sur http://www.guillaumelarget.com/starwars /!\


1) Mise en forme RWD => d�veloppement sans framework. Tout n'est pas forc�ment parfait niveau mise en forme mais vous avez l'essentiel.

2) Parallax 

Pour le parallax, j'ai utilis� une fonction avec des param�tres pour le faire fonctionner � la fois sur le header et le footer. 
J'aurais pu cr�er une instanciation avec un new() mais il m'a sembl� inutile de le faire (cf fichier main.js)

3) Script Asynchrome d'un JSON

====>  NB: /!\ Pour que cela fonctionne correctement en mode local, il faut placer le fichier json sur un serveur local et changer l'url d'appel du fichier /!\

=> utilisation de la m�thode $.ajax de jquery
=> volont� de modulariser la fonction pour l'utiliser avec d'autres param�tres (cf param�tres "options" de la m�thode getJsonFile() qui est en fait un objet d'options)
=> je ne savais pas trop quoi mettre en fail alors j'ai juste mis un console.log si jamais le json n'arrive pas � se t�l�charger

4) Menu qui reste fig� : j'ai trait� le travail � moiti� car je n'ai pas trop bien compris ce qu'il fallait faire. J'ai donc plac� le menu en position : fixed

***********************************************************************************************************************************************************************************************************************
C�t� js :

NB : notation commentaire js => JS DOC
   : utilisation du mode strict js
   
C�t� CSS :

NB : pas d'utilisation de pr�processeurs (SASS, LESS). Je suis rest� simple � ce niveau l�.
NB : pictos twitter, facebook et instagram => utilisation de sprites (cf pictos.png)
**************************************************************************************************************************************************************************************************************************