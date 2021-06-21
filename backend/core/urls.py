from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from . import views
from .routers import router
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.api_overview, name='api-over-view'),
]


urlpatterns += router.urls

urlpatterns += static("/api_media/",
                              document_root=settings.MEDIA_ROOT)