from rest_framework import serializers 
from .models import Song, User, playlist

class UserSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        lookup_field = 'name',
        many = True,
        read_only = True
    )
    class Meta :
        model = User
        fields = ('id', 'user', 'name', 'email', 'password')
        lookup_field = 'name'
        extra_kwargs = {
            'url': {lookup_field: 'name'}
        }


class SongSerializer(serializers.HyperlinkedModelSerializer):
    song = serializers.HyperlinkedRelatedField(
        view_name = 'song_detail',
        lookup_field = 'name',
        many = True,
        read_only = True
    )
    class Meta :
        model = Song
        fields = ('id', 'song', 'name', 'uploader', 'audio_file', 'created_on',)
        lookup_field = 'name'
        extra_kwargs = {
            'url': {lookup_field: 'name'}
        }

class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
    playlist = serializers.HyperlinkedRelatedField(
        view_name = 'playlist_detail',
        lookup_field = 'name',
        many = True,
        read_only = True
    )
    class Meta :
        model = playlist
        fields = ('id','playlist','name', 'creator','songs',)
        lookup_field = 'name'
        extra_kwargs = {
            'url': {lookup_field: 'name'}
        }
