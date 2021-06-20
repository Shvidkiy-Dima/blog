# Generated by Django 3.2 on 2021-06-17 12:11

import ckeditor_uploader.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Work',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('title', models.CharField(db_index=True, max_length=256, unique=True)),
                ('preview', models.ImageField(upload_to='preview/')),
                ('slug', models.SlugField(blank=True, unique=True)),
                ('is_active', models.BooleanField(default=True)),
                ('content', ckeditor_uploader.fields.RichTextUploadingField()),
                ('link', models.URLField()),
            ],
            options={
                'ordering': ('created',),
            },
        ),
    ]
