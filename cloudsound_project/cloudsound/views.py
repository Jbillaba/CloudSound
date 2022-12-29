from rest_framework import generics, viewsets 
from .serializers import SongSerializer, UserSerializer, PlaylistSerializer
from .models import Song,User,playlist
from django.shortcuts import render 
# create views here 
class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = playlist.objects.all()
    serializer_class = PlaylistSerializer
