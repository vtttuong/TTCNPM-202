import requests
import random as rd
from apyori import apriori
url1 = "http://127.0.0.1:8000/api/product/"
url2 = "http://127.0.0.1:8000/api/category/"
url3="http://127.0.0.1:8000/api/order/"
url4="http://127.0.0.1:8000/api/orderproduct/"
url5="http://127.0.0.1:8000/api/comboproduct/"
url6="http://127.0.0.1:8000/api/combo/"


dataProduct=[
{
        "name": "MousseCake",
        "image_url": "https://spoonacular.com/recipeImages/579247-556x370.jpg",
        "price": 1,
        "quantity": 99,
        "rating": 5.0,
        "description": "banh an ngon",
        "category": 13
    },
    {     
        "name": "Gato",
        "image_url": "https://media.ex-cdn.com/EXP/media.tintucvietnam.vn/files/f1/2019/04/19/gato-co-nghia-la-gi-nhi-bb-baaadTZ8LI.jpg?v=1555665525789",
        "price": 3000,
        "quantity": 99,
        "rating": 5.0,
        "description": "thang",
        "category": 13
    },
    {
       
        "name": "Pizza",
        "image_url": "https://images.foody.vn/BlogsContents/24068026_2001339670143765_8078978125335348871_n.jpg",
        "price": 3000,
        "quantity": 99,
        "rating": 5.0,
        "description": "thang",
        "category": 13
    },
{
    "name": "Lotus Salad",
    "image_url": "https://i.ytimg.com/vi/W7mZUwyAa_4/maxresdefault.jpg?v1",
    "category": 3,
    "price": 60000,
    "description": "abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Cocacola",
    "image_url":"https://product.hstatic.net/1000335596/product/img_0163_8dd37ca37c8b447080b3591e540dd99c_2a902d303dac43c0aef9d212828c0b8d.jpg?v1",
    "category":10,
    "price":12000,
    "description":"CocaCola is a popular soft drink for parties, sweet and carbonated to make you drink...",
    "quantity": 99,
    "rating": 5.0  
}
,{
    "name":"Fried noodles",
    "image_url":"https://yummyday.vn/uploads/images/cach-lam-mi-xao-long-ga.jpg?v1",
    "category":3,
    "price":60000,
    "description":"Fried noodles are the favorite food of customers to fill their hungry stomach with great taste.",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Steamed octopus",
    "image_url":"http://cdn.tgdd.vn/Files/2020/07/23/1273085/cach-lam-bach-tuot-hap-gung-thom-ngon-nuc-mui-202007231551145621.jpg?v1",
    "category":7,
    "price":100000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Thai hot pot",
    "image_url":"https://i.ytimg.com/vi/p1ejp7z4mc4/hqdefault.jpg?v1",
    "category":4,
    "price":120000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Tiger Beer",
    "image_url":"http://product.hstatic.net/1000373334/product/2._tiger__b3d67312661a4870ba760e02daf5aac1_grande.jpg?v1",
    "category":10,
    "price":18000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Grill Steak",
    "image_url":"https://thestayathomechef.com/wp-content/uploads/2019/07/GrillingSteak2-500x375.jpg?v1",
    "category":4,
    "price":60000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Chicken hot pot",
    "image_url":"https://yummyday.vn/uploads/images/cach-nau-lau-ga-nam.jpg?v1",
    "category":9,
    "price":150000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Stir-fried nail snails with garlic",
    "image_url":"https://cdn.huongnghiepaau.com/wp-content/uploads/2018/01/727bc3e4d608fe10fff973bb7a50b7fe.jpg?v1",
    "category":7,
    "price":100000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"Yangzhou fried rice",
    "image_url":"https://cdn.tgdd.vn/2020/08/CookProductThumb/Untitled-1-620x620-77.jpg?v1",
    "category":8,
    "price":45000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
,{
    "name":"7 up",
    "image_url":"https://cdn.tgdd.vn/Products/Images/2443/76446/bhx/nuoc-ngot-7-up-vi-chanh-330ml-201905301056152288.JPG?v1",
    "category":10,
    "price":12000,
    "description":"abc",
    "quantity": 99,
    "rating": 5.0
}
]
"""
dataCatergori=["Pot","Eges","appetizer","steak","chicken","fried","seafood","grill","hotpot","drink","beer","combo","cake"]

for item in dataCatergori:
    strt={
        "name": item
        }
    resp = requests.post(url2, json=strt)

for item in dataProduct:
    resp = requests.post(url1, json=item)

for i in range(1,100):
    data = {
    "order_code": str(i),
    "total_price": rd.randint(1,20)*10000,
    "user": 1
    }
    resp = requests.post(url3, json=data)

for t in range(1,5):
    for i in range(1,100):
        data = {"quantity":rd.randint(1,3),"product":rd.randint(1,14),"order":i}
        resp = requests.post(url4, json=data)
"""
"""
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
MB= list(apriori(z, min_support= 0.07, min_confidence= 0.2))
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



for item in listRules:
    t=""
    i=i+1
    min=999
    total=0
    for item2 in item:
        if min>productQuantity[item2]:
            min=productQuantity[item2]
        total=total+productPrice[item2]
    for item2 in item:
        t=t+productName[item2]
    
    for item2 in item:
        data={
        "quantity": productQuantity[item2],
        "combo": i,
        "product": item2
        }
        resp=requests.post(url5,json=data)

    data2={
        "name":t,
        "quantity": min,
        "combo": i,
        "image_url": "https://bepkom9.com/wp-content/uploads/2019/09/com-bo-do-an-99k.jpg",
        "price":total
        }
 
   


    data3={
    "name": t,
    "image_url": "https://bepkom9.com/wp-content/uploads/2019/09/com-bo-do-an-99k.jpg",
    "category": 13,
    "price": total,
    "description": "abc",
    }
"""
  #  resp=requests.post(url6,json=data2)
    
  #  resp=requests.post(url1,json=data3)

data3={
    "name": "thang",
    "image_url": "https://bepkom9.com/wp-content/uploads/2019/09/com-bo-do-an-99k.jpg",
    "category": 13,
    "price": 18000,
    "description": "abc",
    }       
url1="http://127.0.0.1:8000/api/product/"
resp=requests.post(url1,json=data3)

