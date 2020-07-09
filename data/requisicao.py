import requests
import json
from random import random

data = {}
data = []
teste = False


for x in range(30):
    url = "https://pokeapi.co/api/v2/pokemon-form/"+ str(x+1) + "/"
    url2 = "https://pokeapi.glitch.me/v1/pokemon/"+str(x+1)
    response = requests.request("GET", url)
    response2 = requests.request("GET", url2)
    r = response.json()
    r2 = response2.json()
    data.append({
        'id': x+1,
        'name': r["name"],
        'img': 'https://pokeres.bastionbot.org/images/pokemon/'+ str(x+1) + '.png',
        'price': round(random()*1000),
        'info': r2[0]["description"],
        'inCart': teste,
        'count': 0,
        'total': 0
    })

with open('./data/data.js', 'w') as outfile:
    json.dump(data, outfile, indent=2)