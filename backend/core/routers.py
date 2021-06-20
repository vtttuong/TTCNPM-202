from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'user', views.UserViewSet)
router.register(r'product', views.ProductViewSet)
router.register(r'category', views.CategoryViewSet)
router.register(r'order', views.OrderViewSet)
router.register(r'orderproduct', views.OrderProductViewSet)
router.register(r'comboproduct', views.ComboProductViewSet)
router.register(r'combo', views.ComBoViewSet)