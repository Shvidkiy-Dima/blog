#!/bin/bash


python /app/check_conn.py --service-name db --port 5432  --ip db


python /app/manage.py makemigrations
python /app/manage.py migrate --fake-initial
python /app/manage.py collectstatic --noinput
python /app/manage.py dockersuperuser
cd /app

gunicorn project.wsgi -b 0.0.0.0:5000