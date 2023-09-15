import requests
import json

url = "http://localhost:8080/api/v1/rotas"

payload = {}
headers = {}

response = requests.request("GET", url, headers=headers, data=payload)



for item in json.loads(response.text):
    print(item)
