from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Song, playlist
# Register your models here.
admin.site.register(User, UserAdmin)
admin.site.register(Song)
admin.site.register(playlist)