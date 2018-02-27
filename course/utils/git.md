## GIT

### COMANDOS DE GIT

* git init: inicializar git en una carpeta
* git status: ver el estado de git
* git add: añadir algo al cajón
* git add --all: añadir todo
* git rm -- cached RUTA FICHERO: deshacer algo que has añadido al cajón
* git commit -m "comentario log para el commit"
* git branch: podemos ver las ramas que hay en el repositorio local
* git checkout -b (nombre rama): añadir una nueva rama
* git checkout (nombre rama): cambiar de rama
* git diff RUTA FICHERO: ver lo que ha cambiado 
* git remote add origin "address": conectar con gitHub
* git push -u origin 'branch': para subir ramas al gitHub
* git branch -d 'branch': borrar rama
* git push origin 'branch': actualizar repositorio online a partir del repositorio local
* git pull origin 'branch': obtener el repositorio online para trabajarlo en local
* git remote add upstream 'url': sirve para apuntar al repositorio original para ejecutar el fetch
* git fetch 'upstream': 

Proceso para realizar un pull request a un upstream (asumiendo que ya has realizado el fork, te bajaste el repo a tu equipo y configuraste como remoto al repositorio upstream):

- git fetch --all
- git pull
- git checkout -b feature/newbranch develop

- do your changes on code

- Antes de pushear, nos aseguramos que seguimos teniendo el código más reciente de upstream/develop 

- git checkout feature/newbranch  (ya deberíamos estar en la rama)
- git fetch --all
- git pull

- si hay conflictos resolverlos

- git add .
- git cm -m "bla bla"
- git push origin feature/newbranch

- Crea el PR desde GitHub (de tu rama, hacia la develop de upstream).
- Es buena idea no eliminar la rama de tu equipo hasta que el PR se resuelva (esto te permitirá seguir haciendo cambios en el PR si es necesario). Obviamente, tampoco la borres de GitHub.


// Para realizar otro PR, crea una rama nueva y vuelve a seguir todos los pasos.