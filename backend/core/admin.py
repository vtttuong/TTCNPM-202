from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin

from django.contrib import admin
from .models import *

@admin.register(User)
class UserAdmin(DefaultUserAdmin):
    pass

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    pass

@admin.register(OrderProduct)
class OrderProductAdmin(admin.ModelAdmin):
    pass