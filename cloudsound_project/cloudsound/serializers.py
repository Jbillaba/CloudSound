from rest_framework import serializers
from rest_framework.serializers import Serializer, FileField
from .models import Song, User, playlist
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

# ran into a bug where the data wouldnt get rendered on screen fixed it with this article https://stackoverflow.com/questions/71721307/got-attributeerror-when-attempting-to-get-a-value-for-field-on-serializer

class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta :
        model = User
        fields = ('id', 'username' ,'name', 'email', 'password')


class SongSerializer(serializers.HyperlinkedModelSerializer):
    content_type ='multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    name = serializers.CharField(required=False )
    image = serializers.FileField(required=False)
    audio_file = serializers.FileField(required=False)
    class Meta :
        model = Song
        fields = ('id',  'image', 'name', 'audio_file', 'created_on')
    
    def create(self, validated_data):
        song = Song.objects.create(
            name=validated_data.get('name'),
            image=validated_data.get('image'),
            audio_file=validated_data.get('audio_file'),
        )

        song.save()

        return song


class PlaylistSerializer(serializers.HyperlinkedModelSerializer):
    songs = SongSerializer(
        many = True,
        read_only = True
    )
    class Meta :
        model = playlist
        fields = ('id', 'image', 'name', 'creator','songs')



class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])

    class Meta:
        model = User
        fields = ( 'name', 'email','username', 'password',)

    def create(self, validated_data):
        user = User.objects.create(
            name=validated_data['name'],
            email=validated_data['email'],
            username=validated_data['username'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class UploadSongSerializer(Serializer):
    name = serializers.CharField( required=True )
    image = serializers.FileField()
    audio_file = serializers.FileField(required=True)
    uploader = serializers.Field(source='User.id', label="uploader")

    class Meta:
        model = Song
        fields = ( 'name', 'image', 'audio_file', 'uploader')