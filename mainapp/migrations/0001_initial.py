# Generated by Django 3.2.6 on 2021-08-17 14:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='category name')),
                ('slug', models.SlugField(unique=True, verbose_name='Category url')),
            ],
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='post name')),
                ('slug', models.SlugField(unique=True, verbose_name='Post url')),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='blog_posts/')),
                ('pub_date', models.DateTimeField(auto_now=True)),
                ('in_archive', models.BooleanField(default=False)),
                ('blog_category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='mainapp.blogcategory', verbose_name='category_name')),
            ],
        ),
    ]