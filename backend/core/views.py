from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response

from rest_framework import viewsets, status, exceptions
from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import AllowAny
from .serializers import *
from .models import *

# Create your views here.

@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'List': '/product-list',
        'Detail View': '/product-detail/<str:pk>/',
        'Create': '/product-create/',
        'Update': '/product-update/<str:pk>/',
        'Delete': '/product-delete/<str:pk>/',
    }
    return Response(api_urls)
class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    
class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    
class OrderViewSet(ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]
    
class OrderProductViewSet(ModelViewSet):
    queryset = OrderProduct.objects.all()
    serializer_class = OrderProductSerializer
    permission_classes = [AllowAny]
    
class ComboProductViewSet(ModelViewSet):
    queryset = ComboProduct.objects.all()
    serializer_class = ComboProductSerializer
    permission_classes = [AllowAny]
class ComBoViewSet(ModelViewSet):
    queryset = ComBo.objects.all()
    serializer_class = ComBoSerializer
    permission_classes = [AllowAny]