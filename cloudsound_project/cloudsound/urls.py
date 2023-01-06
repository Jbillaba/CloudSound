from rest_framework.routers import DefaultRouter
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from cloudsound.views import SongViewSet, UserViewSet, PlaylistViewSet, RegisterView, UploadView
from . import views
from django.contrib import admin 
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)


# nasty bug wouldnt properly display the data nearly a week later i fixed it with the help of this article https://www.django-rest-framework.org/tutorial/6-viewsets-and-routers/#binding-viewsets-to-urls-explicitly 

# this chunk of code below pretty much limits what methods can be done 
song_list = SongViewSet.as_view({
    'get': 'list',
    'post': 'create'
})

song_detail = SongViewSet.as_view({
    'get': 'retrieve', 
    'put': 'update', 
    'patch' : 'partial_update', 
    'delete': 'destroy'
})

user_list = UserViewSet.as_view({
    'get': 'list', 
    'post': 'create'
})

user_detail = UserViewSet.as_view({
    'get' : 'retrieve', 
    'put' : 'update', 
    'patch': 'partial_update', 
    'delete': 'destroy'
})

playlist_list = PlaylistViewSet.as_view({
    'get': 'list', 
    'post': 'create'
})

playlist_detail = PlaylistViewSet.as_view({
    'get' : 'retrieve', 
    'put' : 'update', 
    'patch': 'partial_update', 
    'delete': 'destroy'
})
router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'songs', views.SongViewSet)
router.register(r'playlists', views.PlaylistViewSet)

urlpatterns = [
  path('', include(router.urls)),
  path('admin/', admin.site.urls),
  path('upload/', UploadView.as_view(), name='song upload'),
  path('api/', include('rest_framework.urls')),
  path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('api/register/', RegisterView.as_view(), name='register_view'),
  path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

] 
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


