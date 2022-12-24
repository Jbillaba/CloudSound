from django.db import models
from uuid import uuid4
from django.contrib.postgres.fields import ArrayField
def generateUUID():
    return str(uuid4())
# Create your models here.

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=generateUUID, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Song(models.Model):
    id = models.UUIDField(primary_key=True, default=generateUUID, editable=False)
    name = models.CharField(max_length=100)
    artist = models.ForeignKey(User, on_delete=models.CASCADE, related_name="artist" )
    audio_file = models.FileField(upload_to='./media/')
    created_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class playlist(models.Model):
    id = models.UUIDField(primary_key=True, default=generateUUID, editable=False)
    name = models.CharField(max_length=100)
    songs = models.ManyToManyField(Song, related_name='song_in_playlist')
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='creator' )

    def __str__(self):
        return self.name