from rest_framework import serializers 
from .models import Song, User, playlist

# ran into a bug where the data wouldnt get rendered on screen fixed it with this article https://stackoverflow.com/questions/71721307/got-attributeerror-when-attempting-to-get-a-value-for-field-on-serializer

class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta :
        model = User
        fields = ('id',  'name', 'email')


class SongSerializer(serializers.HyperlinkedModelSerializer):

    class Meta :
        model = Song
        fields = ('id',  'image', 'name', 'uploader', 'audio_file', 'created_on')

class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
    songs = SongSerializer(
        many = True,
        read_only = True
    )
    class Meta :
        model = playlist
        fields = ('id', 'image', 'name', 'creator','songs')

