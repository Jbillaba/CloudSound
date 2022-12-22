from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('songs/', views.SongList.as_view(), name='song_list'),
    path('songs/<uuid:pk>', views.SongDetail.as_view(), name='song_detail'),
    path('', views.UserList.as_view(), name='user_list'),
    path('users/<uuid:pk>', views.UserDetail().as_view(), name='user_detail')
]