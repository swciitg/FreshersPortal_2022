from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

# Imp Model
class Imp(models.Model):
    title = models.CharField('Title', max_length=200, null=True, blank=True)
    info = RichTextField('Info', blank=True, null=True)

    def __str__(self):
        return self.title

# Base model
class BaseModel(models.Model):
    type = models.CharField('Type', max_length=20, null=True, blank=True)
    title = models.CharField('Title', max_length=100, null=True, blank=True)
    img = models.ImageField('Image', upload_to='img/', null=True, blank=True)
    text = RichTextField('Text', null=True, blank=True)
    person = models.CharField('Person', max_length=100, null=True, blank=True)
    weblink = models.URLField('Weblink', max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title


# contact us model
class Contact(models.Model):
    img = models.ImageField('Image', upload_to='img/', null=True, blank=True)
    name = models.CharField('Name', max_length=100, null=True, blank=True)
    designation = models.CharField('Designation', max_length=100, null=True, blank=True)
    contact = models.IntegerField('Contact', null=True, blank=True)
    email = models.EmailField('email', max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

# Opening 1 model
class Open1(models.Model):
    type = models.CharField('Type', max_length=20, null=True, blank=True)
    title = models.CharField('Title', max_length=100, null=True, blank=True)
    text = RichTextField('Text', null=True, blank=True)

    def __str__(self):
        return self.title    

# Opening 2 model
class Open2(models.Model):
    type = models.CharField('Type', max_length=20, null=True, blank=True)
    title = models.CharField('Title', max_length=100, null=True, blank=True)
    img = models.ImageField('Image', upload_to='img/', null=True, blank=True)

    def __str__(self):
        return self.title   

# FAQ model
class FAQ(models.Model):
    que = models.TextField('Question', null=True, blank=True)
    ans = RichTextField('Answer', null=True, blank=True)

# Drop your message model
class DropMsg(models.Model):
    name = models.CharField('Name', max_length=100, null=True, blank=True)
    email = models.EmailField('Email', max_length=100, null=True, blank=True)
    contact = models.IntegerField('Contact', null=True, blank=True)
    message = RichTextField('Message', null=True, blank=True)