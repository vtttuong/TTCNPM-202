from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass

class Category(models.Model):
    name = models.CharField(max_length=250)
    class Meta:
        managed = True

class Product(models.Model):
    name = models.CharField(max_length=250, null=True)
    image_url = models.URLField(null=True)
    price = models.IntegerField(null=False)
    quantity = models.IntegerField(default=999)
    rating = models.FloatField(default=5)
    description = models.CharField(max_length=250)
    category = models.ForeignKey(Category, related_name='product_category', on_delete=models.DO_NOTHING)
    class Meta:
        managed = True
class Order(models.Model):
    order_code = models.CharField(max_length=20, null=True)
    user = models.ForeignKey(User, related_name='order_user', on_delete=models.DO_NOTHING)
    total_price = models.IntegerField(null=False)
    created_at = models.DateTimeField(auto_now=True)
    class Meta:
        managed = True
class OrderProduct(models.Model):
    product = models.ForeignKey(Product, related_name='orderproduct_product', on_delete=models.DO_NOTHING)
    quantity = models.IntegerField(default=1)
    order = models.ForeignKey(Order, related_name='orderproduct_order', on_delete=models.DO_NOTHING)
    class Meta:
        managed = True
class ComboProduct(models.Model):
    product = models.ForeignKey(Product, related_name='comboproduct_product', on_delete=models.DO_NOTHING)
    quantity = models.IntegerField(default=999)
    combo = models.IntegerField(default=1)
    class Meta:
        managed = True
class ComBo(models.Model):
    quantity = models.IntegerField(default=999)
    combo = models.IntegerField(default=1)
    image_url= models.URLField(null=True)
    price = models.IntegerField(null=False)
    name = models.CharField(max_length=250, null=True)
    class Meta:
        managed = True
class Image(models.Model):
    image_url= models.ImageField(null=True)
   # product = models.ForeignKey(Product, related_name='images_product', on_delete=models.DO_NOTHING)
    class Meta:
        managed = True

