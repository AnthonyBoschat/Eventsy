<!-- 1. Se rendre dans le projet -->

cd Eventsy


<!-- 2. Installer les dépendance dans le dossier backend avec composer -->


docker compose run --rm backend composer install --no-dev



<!-- 3. Dans le dossier backend, créer un fichier nommer     .env        Et copier l'intégraliter de ce qu'il y a de .env.example dedans -->



<!-- 4. Générer les clefs avec php artisan -->

docker compose run --rm backend php artisan key:generate






<!-- 5. Installer les dépendance front -->

docker compose run --rm frontend npm install

<!-- 6. Monter les volumes avec docker -->

docker compose up

<!-- 7.? Possiblement inutile, mais générer les tables par défaut coté backend, ouvre un nouveau terminal et assure toi d'etre dans le dossier Eventsy pour ça -->

docker compose exec backend php artisan migrate







<!-- 8. A partir de là, dans le terminal il t'indiquera que tu peux accéder au projet sur ces ports -->

Front : http://localhost:5173/

Back : http://localhost:8000/



<!-- Désormais, une fois dans le dossier Eventsy, l'unique commande pour lancer le front et le back sera -->
docker compose up
<!-- Il est nécessaire de laisser ouvert ce terminal pour maintenir en vie le backend et le frontend, pour quitter -> ctrl+c -->


