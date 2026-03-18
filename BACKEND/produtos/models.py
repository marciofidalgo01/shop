from django.db import models


class Categoria(models.Model):
    nome = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.nome
    
class Produto(models.Model):

    nome = models.CharField(max_length=250)

    slug = models.SlugField(unique=True)

    sku = models.CharField(max_length=50, unique=True)

    preco = models.DecimalField(max_digits=12, decimal_places=2)

    estoque = models.PositiveIntegerField(default=0)

    ativo = models.BooleanField(default=True)
    
    destaque = models.BooleanField(default=False)

    descricao = models.TextField()

    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.SET_NULL,
        null=True,
        related_name="produtos"
    )

    criado_em = models.DateTimeField(auto_now_add=True)

    atualizado_em = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome
    
class ProdutoImagem(models.Model):

    produto = models.ForeignKey(
        Produto,
        on_delete=models.CASCADE,
        related_name="imagens"
    )

    url = models.URLField()

    def __str__(self):
        return f"Imagem de {self.produto.nome}"
        