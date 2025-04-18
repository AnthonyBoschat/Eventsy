<!-- Avant toute chose, assure toi que ton logiciel docker desktop est correctement lancer ( tu devrais l'avoir d'installer depuis la semaine avec docker normalement ) -->



<!-- 1. Se rendre dans le projet -->

cd Eventsy


<!-- 2. Installer les dépendance dans le dossier backend avec composer -->


docker compose run --rm backend composer install --no-dev



<!-- 3. Dans le dossier backend, créer un fichier nommer     .env        Et me demander ce qu'il faut rentrer dedans -->



<!-- 4. Générer les clefs avec php artisan -->

docker compose run --rm backend php artisan key:generate


<!-- 5. Petit oubli de ma part au moment de générer le docker, il y a des dossiers qui sont manquant, génère les comme ça -->
docker compose exec backend mkdir -p \
  storage/framework/{cache/data,sessions,views} \
  storage/logs \
  bootstrap/cache



<!-- 6. Installer les dépendance front -->

docker compose run --rm frontend npm install


<!-- 7.? Possiblement inutile, mais générer les tables par défaut coté backend -->

docker compose exec backend php artisan migrate




<!-- 8. Monter les volumes avec docker -->

docker compose up



<!-- 9. A partir de là, dans le terminal il t'indiquera que tu peux accéder au projet sur ces ports -->

Front : http://localhost:5173/

Back : http://localhost:8000/


