# Generated by Django 4.0.1 on 2023-01-07 19:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cloudsound', '0009_alter_song_audio_file_alter_song_image_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='audio_file',
            field=models.FileField(default='./media/CloudSoundDefaultAudio.wav', upload_to='./media/'),
        ),
        migrations.AlterField(
            model_name='song',
            name='name',
            field=models.CharField(default='no name given', max_length=100),
        ),
    ]
