from django.db import models
from uuid import uuid4

def generateUUID():
    return str(uuid4())
# Create your models here.

class User(models.Model):
    id = models.UUIDField(primary_key=True, default=generateUUID, editable=False)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=200)

    def __str__(self):
        return self.name


class Song(models.Model):
    id = models.UUIDField(primary_key=True, default=generateUUID, editable=False)
    name = models.CharField(max_length=100)
    artist = models.CharField(max_length=225)
    audio_file = models.FileField()
    created_on = models.DateTimeField(auto_now_add=True)
    uploader = models.ForeignKey(User, on_delete=models.CASCADE, default=generateUUID,  related_name="songUploader")
 

    def __str__(self):
        return self.name