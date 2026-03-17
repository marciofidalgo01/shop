from rest_framework import serializers
from .models import Produto, ProdutoImagem, Categoria


class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = "__all__"

class ProdutoImagemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProdutoImagem
        fields = "__all__"



class ProdutoSerializer(serializers.ModelSerializer):
    imagens = ProdutoImagemSerializer(many=True, read_only=True)
    categoria = CategoriaSerializer(read_only=True)

    class Meta:
        model = Produto
        fields = "__all__"

