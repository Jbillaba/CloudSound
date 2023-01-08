from rest_framework import serializers
from rest_framework.serializers import Serializer, FileField
from .models import Song, User, playlist
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password
from cloudsound.middleware.base64serializer import AudioBase64File
from drf_extra_fields.fields import Base64ImageField


# ran into a bug where the data wouldnt get rendered on screen fixed it with this article https://stackoverflow.com/questions/71721307/got-attributeerror-when-attempting-to-get-a-value-for-field-on-serializer

class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta :
        model = User
        fields = ('id', 'username' ,'name', 'email', 'password')


class SongSerializer(serializers.HyperlinkedModelSerializer):
    content_type ='multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    name = serializers.CharField(required=True)
    image = serializers.FileField(required=True)
    audio_file = serializers.FileField(required=True)
    uploader=serializers.CharField(required=True)
    class Meta :
        model = Song
        fields = ('id',  'image', 'uploader', 'name', 'audio_file', 'created_on')
    
    def create(self, validated_data):
        song = Song.objects.create(
            name=validated_data['name'],
            image=validated_data['image'],
            audio_file=validated_data['audio_file'],
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

class UploadSongSerializer(serializers.ModelSerializer):
    content_type ='multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    name = serializers.CharField()
    image = serializers.FileField(default='./media/default-cover-art.png')
    audio_file = serializers.FileField()

    class Meta:
        model = Song
        fields = ( 'name', 'image', 'audio_file')

    def create(self, validated_data):
        song = Song.objects.create(
            name=validated_data['name'],
            image=validated_data['image'],
            audio_file=validated_data['audio_file']
        )
        song.save()
        return song