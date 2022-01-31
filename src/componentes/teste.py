import json, requests

# essa linha pega os recursos do link e atribui a variavel
response = requests.get("http://localhost:5000/v1/pontos")

# realiza a conversão do response para um formato acessível ao python
json_data = json.loads(response.text)

# imprime na tela o valor do primeiro ano do censo - demonstração de navegação
print(json_data[0])