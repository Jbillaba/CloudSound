from rest_framework import viewsets, parsers, generics
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import FileUploadParser
from rest_framework.permissions import AllowAny 
from .serializers import SongSerializer, UserSerializer, PlaylistSerializer, RegisterSerializer, UploadSongSerializer
from .models import Song,User,playlist

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# create views here 
class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    content_type ='multipart/form-data'
    serializer_class = SongSerializer
    parser_classes = [parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser, parsers.FileUploadParser]
    http_method_names = ['get', 'post', 'patch', 'delete']

    @action(methods=['put'], detail=True, parser_classes=[FileUploadParser])
    def upload_file(self, request, pk=None):
        obj = self.get_object()
        obj.file = request.data['file']
        obj.save()
        return Response(status=204)
    

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
    permission_classes=(AllowAny,)
    serializer_class = UploadSongSerializer

    

