from pyexpat import model
from django.db import models
from distutils.command.upload import upload
from django.db import models
from datetime import datetime
from django.forms import DateTimeField
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


# Create your models here.

class Community(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    title=models.CharField(max_length=200)
    body=models.TextField(blank=True)
    date_created=models.DateTimeField(auto_now_add=True)
    image = models.ImageField( upload_to = 'blog_image',blank=True) 
  

    def __str__(self):
        return self.title
    class Meta:
        ordering = ['-id']



class Comment(models.Model):
    post = models.ForeignKey(Community,on_delete=models.CASCADE)
    body=models.TextField(blank=True)
    owner = models.ForeignKey(User,on_delete=models.CASCADE)
    date_created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.body[:50]}...'
    class Meta:
        ordering = ['-id']




    


class Movie(models.Model):
    image= models.ImageField(upload_to='blog_image', blank=True)
    title=models.CharField(max_length=200)
    body=models.TextField(blank=True)
    link=models.URLField(blank=True)
    # video = models.FileField(upload_to='videos_uploaded',null=True)

    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']



class game_article(models.Model):
    title=models.CharField(max_length=200 , blank=True)
    source=models.CharField(max_length=200 , blank=True)
    source_link=models.URLField(blank=True)
    article_body=models.TextField(blank=True)
    article_body2=models.TextField(blank=True)
    article_body3=models.TextField(blank=True)
    article_body4=models.TextField(blank=True)
    article_img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']
        
class PC_game(models.Model):
    pc_game=models.CharField(max_length=200, blank=True)
    pc_link=models.URLField(blank=True)
    pc_game_img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.pc_game[:50]}...'
    class Meta:
        ordering = ['-id']

class android_game(models.Model):
    game=models.CharField(max_length=200, blank=True)
    link=models.URLField(blank=True)
    img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.game[:50]}...'
    class Meta:
        ordering = ['-id']



class Music(models.Model):
    title=models.CharField(max_length=200)
    author=models.CharField(max_length=200)
    image=models.ImageField(upload_to='blog_image',blank=True)
    song=models.FileField(upload_to='musics/')

    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']


class Discover_article(models.Model):
    title=models.CharField(max_length=200 , blank=True)
    source=models.CharField(max_length=200 , blank=True)
    source_link=models.URLField(blank=True)
    body=models.TextField(blank=True)
    body2=models.TextField(blank=True)
    body3=models.TextField(blank=True)
    body4=models.TextField(blank=True)
    img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)
    # owner = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']

class Quotes(models.Model):
    image=models.ImageField(upload_to='blog_image', blank=True)


    

class Did_you_know(models.Model):
    body=models.TextField(blank=True)

    def __str__(self):
        return f'{self.body[:50]}...'
    class Meta:
        ordering = ['-id']

class Meme(models.Model):
    image=models.ImageField(upload_to='blog_image', blank=True)

    def __str__(self):
        return f'{self.image[:50]}...'
    class Meta:
        ordering = ['-id']

class sport(models.Model):
    title=models.CharField(max_length=200 , blank=True)
    body=models.TextField(blank=True)
    body2=models.TextField(blank=True)
    body3=models.TextField(blank=True)
    body4=models.TextField(blank=True)
    source=models.CharField(max_length=200 , blank=True)
    source_link=models.URLField(blank=True)
    img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)




    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']

class Business(models.Model):
    title=models.CharField(max_length=200 , blank=True)
    body=models.TextField(blank=True)
    body2=models.TextField(blank=True)
    body3=models.TextField(blank=True)
    body4=models.TextField(blank=True)
    source=models.CharField(max_length=200 , blank=True)
    source_link=models.URLField(blank=True)
    img=models.ImageField(upload_to='blog_image', blank=True)
    date_created=models.DateTimeField(auto_now_add=True)




    def __str__(self):
        return f'{self.title[:50]}...'
    class Meta:
        ordering = ['-id']

class Wallpapers(models.Model):
    image=models.ImageField(upload_to='blog_image', blank=True)


    class Meta:
        ordering = ['-id']

class Email(models.Model):
    email = models.EmailField()