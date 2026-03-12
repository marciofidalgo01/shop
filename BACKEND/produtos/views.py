from rest_framework import viewsets
from .models import Produto, ProdutoImagem
from .serializers import ProdutoSerializer, ProdutoImagemSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

    def get_queryset(self):

        queryset = Produto.objects.all()
        params = self.request.query_params

        categoria = params.get("categoria")
        marca = params.get("marca")
        ano = params.get("ano")
        motor = params.get("motor")
        preco = params.get("preco")


        if categoria:
            categorias = categoria.split(",")
            queryset = queryset.filter(categoria__in=categorias)

        if marca:
            marcas = marca.split(",")
            queryset = queryset.filter(marca__in=marcas)

        if ano:
            anos = [int(a) for a in ano.split(",")]
            queryset = queryset.filter(ano__in=anos)

        if motor:
            motores = motor.split(",")
            queryset = queryset.filter(motor__in=motores)

        if preco:
          min_preco, max_preco = preco.split("-")
          queryset = queryset.filter(preco__gte=min_preco, preco__lte=max_preco)

        return queryset






class ProdutoImagemViewSet(viewsets.ModelViewSet):
    queryset = ProdutoImagem.objects.all()
    serializer_class = ProdutoImagemSerializer

    

    