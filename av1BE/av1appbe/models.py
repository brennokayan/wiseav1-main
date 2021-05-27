from django.db import models


class Produtos (models.Model):
    Nome = models.CharField(max_length=55)
    Quantidade = models.IntegerField()
    precoProduto = models.FloatField()
    Descricao = models.CharField(max_length=2255)

