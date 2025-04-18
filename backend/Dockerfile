FROM php:8.3-cli-alpine

# Outils système + composer
RUN apk add --no-cache git zip unzip \
 && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# 👉 Dépendances de compilation
RUN apk add --no-cache --virtual .build-deps $PHPIZE_DEPS mysql-dev \
 && docker-php-ext-install pdo_mysql \
 && apk del .build-deps

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --no-interaction --prefer-dist

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
