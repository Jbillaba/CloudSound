from rest_framework.routers import DefaultRouter
from django.urls import path, include
from cloudsound.views import SongViewSet, UserViewSet, PlaylistViewSet
from . import views

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
  path('', include(router.urls))
]




