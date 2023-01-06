from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4
def generateUUID():
    return str(uuid4())
# Create your models here.

class User(AbstractUser):
    name = models.CharField(max_length=100)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Song(models.Model):
    name = models.CharField(max_length=100)
    image = models.FileField(upload_to='./media/', default='./media/default-cover-art_tVe9r28.png')
    audio_file = models.FileField(upload_to='./media/')
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class playlist(models.Model):
    name = models.CharField (max_length=100)
    songs = models.ManyToManyField(Song, related_name='song_in_playlist')
    image = models.FileField(upload_to='./media/', default='./media/default-cover-art_tVe9r28.png')
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='creator' )

    def __str__(self):
        return self.name