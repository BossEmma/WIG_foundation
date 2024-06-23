# Generated by Django 5.0.6 on 2024-06-12 19:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_projectgallery_gallery_blog'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='content',
            field=models.CharField(blank=True, max_length=10000, null=True, verbose_name='Main Content'),
        ),
        migrations.AlterField(
            model_name='project',
            name='content',
            field=models.CharField(blank=True, max_length=10000, null=True, verbose_name='Main Content'),
        ),
        migrations.AlterField(
            model_name='project',
            name='sub_header',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Sub Header'),
        ),
        migrations.AlterField(
            model_name='project',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Title'),
        ),
        migrations.AlterField(
            model_name='project',
            name='volunteer',
            field=models.CharField(blank=True, max_length=500, null=True, verbose_name='Volunteer'),
        ),
    ]
