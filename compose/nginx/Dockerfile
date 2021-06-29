FROM blog_django as django

RUN /app/manage.py collectstatic --noinput


FROM nginx:alpine

#!/bin/sh

COPY ./compose/nginx/prod.conf /etc/nginx/conf.d/default.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

COPY --from=django /app/media/static /srv/static/static
COPY ./src/assets /srv/static/static/assets
COPY ./src/public /srv/static/

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]

