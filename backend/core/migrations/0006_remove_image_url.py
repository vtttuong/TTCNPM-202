# Generated by Django 3.0.14 on 2021-07-05 01:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_image_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='url',
        ),
    ]
