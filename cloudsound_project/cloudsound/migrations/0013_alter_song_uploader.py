# Generated by Django 4.0.1 on 2023-01-08 04:54

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cloudsound', '0012_song_uploader'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='uploader',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='uploader', to=settings.AUTH_USER_MODEL),
        ),
    ]