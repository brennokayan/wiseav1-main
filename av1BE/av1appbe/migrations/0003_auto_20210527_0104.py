# Generated by Django 3.2.3 on 2021-05-27 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('av1appbe', '0002_alter_produtos_descricao'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produtos',
            name='idProd',
        ),
        migrations.AddField(
            model_name='produtos',
            name='id',
            field=models.BigAutoField(auto_created=True, default=0, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
