# Generated by Django 4.1.4 on 2022-12-22 16:01

import cloudsound.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.UUIDField(default=cloudsound.models.generateUUID, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('artist', models.CharField(max_length=225)),
                ('audio_file', models.FileField(upload_to='')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.UUIDField(default=cloudsound.models.generateUUID, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=200)),
                ('songs_uploaded', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='songsUploaded', to='cloudsound.song')),
            ],
        ),
    ]
