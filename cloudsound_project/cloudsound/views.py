from rest_framework import generics 
from .serializers import SongSerializer, UserSerializer, PlaylistSerializer
from .models import Song,User,playlist
# create views here 
class SongList(generics.ListCreateAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

class SongDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Song.objects.all()
    serializer_class = SongSerializer
    lookup_field = 'name'

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'name'

class PlaylistList(generics.ListCreateAPIView):
    queryset = playlist.objects.all()
    serializer_class = PlaylistSerializer 

class PlaylistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = playlist.objects.all()
    serializer_class = PlaylistSerializer
    lookup_field = 'name'