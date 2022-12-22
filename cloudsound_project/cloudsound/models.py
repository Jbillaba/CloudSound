from django.db import models

# Create your models here.

class Song(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=225)
    audio_file = models.FileField()
    created_on = models.DateTimeField(auto_now_add=True)
 

    def __str__(self):
        return self.id

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)
    songs_uploaded = models.ForeignKey(Song, on_delete=models.CASCADE, related_name="songsUploaded")

    def __str__(self):
        return self.id