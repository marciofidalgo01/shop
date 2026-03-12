import os
import django
import json

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")
django.setup()

from produtos.models import Produto

with open("produtos.json", "r", encoding="utf-8") as file:
    produtos = json.load(file)

for item in produtos:

    dados = item["fields"]

    Produto.objects.create(
        nome=dados["nome"],
        sku=dados["sku"],
        codigo=dados.get("codigo"),
        preco=dados["preco"],
        estoque=dados.get("estoque", 0),
        ativo=dados.get("ativo", True),
        destaque=dados.get("destaque", False),
        descricao=dados.get("descricao", ""),
        peso=dados.get("peso"),
        marca=dados.get("marca"),
        categoria=dados["categoria"],
        ano=dados.get("ano"),
        motor=dados.get("motor"),
    )

print("Produtos inseridos com sucesso!")