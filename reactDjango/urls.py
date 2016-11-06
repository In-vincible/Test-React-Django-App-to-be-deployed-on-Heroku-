from django.conf.urls import url
from django.contrib import admin
from reactDjango.views import *
urlpatterns = [
    url(r'^work/',work,name='work'),
]
