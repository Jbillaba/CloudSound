from rest_framework import serializers 
from .models import Song, User, playlist


class UserSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name = 'song_detail',
        many = True,
        read_only = True
    )
    class Meta :
        model = User
        fields = ('id', 'user', 'name', 'email')


class SongSerializer(serializers.HyperlinkedModelSerializer):
    song = serializers.HyperlinkedRelatedField(
        view_name = 'song_detail',
        many = True,
        read_only = True
    )
    class Meta :
        model = Song
        fields = ('id', 'song', 'image', 'name', 'uploader', 'audio_file', 'created_on')

class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
    playlist = serializers.HyperlinkedRelatedField(
        view_name = 'playlist_detail',
        many = True,
        read_only = True
    )
    class Meta :
        model = playlist
        fields = ('id','playlist', 'image', 'name', 'creator','songs')

