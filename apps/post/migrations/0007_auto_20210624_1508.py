# Generated by Django 3.2 on 2021-06-24 15:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0006_remove_post_preview'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='reading_time',
            field=models.DurationField(blank=True, default=None, editable=False, null=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='slug',
            field=models.SlugField(blank=True, editable=False, unique=True),
        ),
        migrations.AlterField(
            model_name='tag',
            name='slug',
            field=models.SlugField(blank=True, editable=False, unique=True),
        ),
    ]
