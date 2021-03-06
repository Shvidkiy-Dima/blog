# Generated by Django 3.2 on 2021-06-23 07:59

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0003_tag_hover_color'),
    ]

    operations = [
        migrations.CreateModel(
            name='Header',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created', models.DateTimeField(default=django.utils.timezone.now, editable=False)),
                ('modified', models.DateTimeField(auto_now=True)),
                ('anchor', models.CharField(max_length=256)),
                ('title', models.CharField(max_length=256)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='headers', to='post.post')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
