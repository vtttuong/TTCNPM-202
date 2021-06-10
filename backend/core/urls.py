from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from .routers import router

urlpatterns = [
    path('', views.api_overview, name='api-over-view'),
]


urlpatterns += router.urls