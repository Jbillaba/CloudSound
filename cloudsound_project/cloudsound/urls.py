from django.urls import path
from . import views 
from django.views.debug import default_urlconf

urlpatterns = [
    path('', default_urlconf),
    path('songs/', views.SongList.as_view(), name='song_list'),
    path('songs/<uuid:pk>', views.SongDetail.as_view(), name='song_detail'),
    path('songs/<str:name>', views.SongDetail.as_view(), name='song_detail'),
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<uuid:pk>', views.UserDetail().as_view(), name='user_detail'),
    path('users/<str:name>', views.UserDetail().as_view(), name='user_detail'),
    path('playlists/', views.PlaylistList.as_view(), name='playlist_list'),
    path('playlists/<uuid:pk>', views.PlaylistDetail.as_view(), name="playlist_detail"),
    path('playlists/<str:name>', views.PlaylistDetail.as_view(), name="playlist_detail"),
]