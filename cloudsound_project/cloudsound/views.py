from rest_framework import viewsets, parsers, generics
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response 
from rest_framework.permissions import AllowAny 
from .serializers import SongSerializer, UserSerializer, PlaylistSerializer, RegisterSerializer, UploadSongSerializer
from .models import Song,User,playlist

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# create views here 
class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    content_type ='multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
    serializer_class = SongSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser]
    http_method_names = ['get', 'post', 'patch', 'delete']

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser, parsers.FileUploadParser]
    http_method_names = ['get', 'post', 'patch', 'delete']

class PlaylistViewSet(viewsets.ModelViewSet):
    queryset = playlist.objects.all()
    serializer_class = PlaylistSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser, parsers.FileUploadParser]
    http_method_names = ['get', 'post', 'patch', 'delete']

# jwt 

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, User):
        token = super().get_token(User)

        # Add custom claims
        token['email'] = User.email
        token['username'] = User.username
        # ...

        return token 

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    query_set = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer 

class UploadView(generics.CreateAPIView):
    queryset = Song.objects.all()
    serializer_class = UploadSongSerializer

    def list(self, request):
        return Response("GET API")

    def create(self, request):
        image = request.FILES.get('image')
        audio_file = request.FILES.get('audio_file')
        img_content_type = image.content_type
        song_content_type = audio_file.content_type
        response = "POST API and you have uploaded a {} file and a {} file".format(img_content_type)
        return response