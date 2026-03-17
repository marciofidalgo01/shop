from rest_framework import viewsets
from .models import Produto, ProdutoImagem
from .serializers import ProdutoSerializer, ProdutoImagemSerializer


class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()  
    serializer_class = ProdutoSerializer

    def get_queryset(self):
        queryset = Produto.objects.filter(ativo=True)

        params = self.request.query_params

        search = params.get("search")
        categoria = params.get("categoria")
        preco = params.get("preco")
        destaque = params.get("destaque")
        ordering = params.get("ordering")

        if search:
            queryset = queryset.filter(nome__icontains=search)

        if categoria:
            categorias = categoria.split(",")
            queryset = queryset.filter(categoria__slug__in=categorias)

        if preco:
            try:
                min_preco, max_preco = preco.split("-")
                queryset = queryset.filter(
                    preco__gte=min_preco,
                    preco__lte=max_preco
                )
            except ValueError:
                pass

        if destaque and destaque.lower() == "true":
            queryset = queryset.filter(destaque=True)

        if ordering:
            queryset = queryset.order_by(ordering)
        else:
            queryset = queryset.order_by("-criado_em")

        return queryset


class ProdutoImagemViewSet(viewsets.ModelViewSet):
    queryset = ProdutoImagem.objects.all()
    serializer_class = ProdutoImagemSerializer

    

    