from rest_framework import serializers 
from .models import Song, User

class SongSerializer(serializers.HyperlinkedModelSerializer):
    song = serializers.HyperlinkedRelatedField(
        view_name = 'song_detail',
        many = True,
        read_only = True
    )
    class Meta :
        model = Song
        fields = ('id', 'song', 'name', 'artist', 'audio_file', 'created_on',)

class UserSerializer(serializers.HyperlinkedModelSerializer):
    user = serializers.HyperlinkedRelatedField(
        view_name = 'user_detail',
        many = True,
        read_only = True
    )
    class Meta :
        model = User
        fields = ('id', 'user', 'name', 'email')