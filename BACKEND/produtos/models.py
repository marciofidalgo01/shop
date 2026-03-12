from django.db import models


class Produto(models.Model):

    nome = models.CharField(max_length=250)

    sku = models.CharField(max_length=50, unique=True)

    codigo = models.CharField(
        max_length=50,
        unique=True,
        null=True,
        blank=True
    )

    preco = models.DecimalField(max_digits=12, decimal_places=2)

    estoque = models.PositiveIntegerField(default=0)

    ativo = models.BooleanField(default=True)
    destaque = models.BooleanField(default=False)

    descricao = models.TextField()

    peso = models.DecimalField(
        max_digits=6,
        decimal_places=2,
        null=True,
        blank=True
    )

    marca = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        db_index=True
    )

    ano = models.IntegerField(
        null=True,
        blank=True,
        db_index=True
    )

    motor = models.CharField(
        max_length=20,
        null=True,
        blank=True,
        db_index=True
    )

    categoria = models.CharField(
        max_length=50
        )

    criado_em = models.DateTimeField(auto_now_add=True,null=True)

    class Meta:
        ordering = ["-criado_em"]

    def __str__(self):
        return f"{self.nome} ({self.sku})"


class ProdutoImagem(models.Model):

    produto = models.ForeignKey(
        Produto,
        on_delete=models.CASCADE,
        related_name="imagens"
    )

    url = models.URLField()

    def __str__(self):
        return f"Imagem de {self.produto.nome}"
    
