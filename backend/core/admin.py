from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin
import requests
from django.contrib import admin
from .models import *
import random as rd
from apyori import apriori
url1 = "http://127.0.0.1:8000/api/product/"
url2 = "http://127.0.0.1:8000/api/category/"
url3="http://127.0.0.1:8000/api/order/"
url4="http://127.0.0.1:8000/api/orderproduct/"
url5="http://127.0.0.1:8000/api/comboproduct/"
url6="http://127.0.0.1:8000/api/combo/"
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
@admin.register(ComboProduct)
class ComboProductAdmin(admin.ModelAdmin):
    pass
@admin.register(ComBo)
class ComBoAdmin(admin.ModelAdmin):
    def save_model(self, request, obj, form, change):
        resp=requests.get(url2).json()
        for item in resp:
            if item['name']=='combo':
                combo=item['id']
        if  request.method=='POST' and (request.POST.dict())["name"]!="AUTO":
            t=request.POST.dict()
            resp=requests.get(url1).json()
            bol=False
            for item in resp:
                if item['name']==t['name']:
                    url=str(item['id'])
                    bol=True
            if bol==False:
                data3={}
                data3['name']=t['name']
                data3['quantity']=t['quantity']
                data3['price']=t['price']
                data3['image_url']=t['image_url']
                data3["rating"]= 5.0
                data3["description"]="abc"
                data3["category"]=combo
                resp=requests.post(url1,json=data3)
            else:
                data3={}
                data3['name']=t['name']
                data3['quantity']=t['quantity']
                data3['price']=t['price']
                data3['image_url']=t['image_url']
                data3["rating"]= 5.0
                data3["description"]="abc"
                data3["category"]=combo
                url=url1+url+"/"
                resp=requests.put(url,json=data3)
        
        if  request.method=='POST' and (request.POST.dict())["name"]=="AUTO":
            t=request.POST.dict()
            aprioriiii(t['name'])
            return
        super(ComBoAdmin, self).save_model(request, obj, form, change)
@admin.register(Image)
class ImageAdmin(admin.ModelAdmin): pass    

def aprioriiii(alpha):
    productlist=requests.get(url1).json()
    resp = requests.get(url3)
    u=[]
    t=0
    for item in resp.json():
        t=t+1
    z=[u]*t
    resp2 = requests.get(url4)

    for item in resp2.json():
        z[item['order']-1]=z[item['order']-1]+[item['product']]
    for i in range(len(z)):
        z[i]=list(set(z[i]))
    MB= list(apriori(z, min_support= 0.1, min_confidence= 0.3))
    listRules = [list(MB[i][0]) for i in range(0,len(MB))]
    for i in range(len(listRules)):
        listRules[i]=list(set(listRules[i]))
    rule=[]
    listRules=[x for x in listRules if len(x)>1]
    resp=requests.get(url1).json()
    for item in resp:
        i=i+1
    productQuantity=[None]*len(list(resp))
    productPrice=[None]*len(list(resp))
    productImageURL=[None]*len(list(resp))
    productName=[None]*len(list(resp))
    for item in resp:
        productQuantity[item['id']-1]=item['quantity']
        productPrice[item['id']-1]=item['price']
        productImageURL[item['id']-1]=item['image_url']
        productName[item['id']-1]=item["name"]
    

    i=0
    for item in listRules:
        t=""
        u="" 
        i=i+1
        min=999
        total=0
        for item2 in item:
            if min>productQuantity[item2]:
                min=productQuantity[item2]
            total=total+productPrice[item2]
        for item2 in item:
            if t!="":
                u = ", "
            t=t+u+productName[item2]
    

        data3={
        "name":t,
        "quantity": min,
        "combo": i,
        "image_url": "https://bepkom9.com/wp-content/uploads/2019/09/com-bo-do-an-99k.jpg",
        "price":total,
        }
        resp=requests.get(url1).json()
        bol=False
        for item in resp:
                if item['name']==alpha:
                    bol=True
        if bol==False:
            resp=requests.post(url6,json=data3)

