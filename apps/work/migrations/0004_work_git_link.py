# Generated by Django 3.2 on 2021-06-25 06:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('work', '0003_alter_work_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='git_link',
            field=models.URLField(blank=True, default=None, null=True),
        ),
    ]
