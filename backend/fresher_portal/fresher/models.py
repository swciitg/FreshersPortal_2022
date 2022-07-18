from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

# Imp Model
class Imp(models.Model):
    title = models.CharField(max_length=200, null=True, blank=True)
    info = RichTextField(blank=True, null=True)

    def __str__(self):
        return self.title

# Base model
class BaseModel(models.Model):
    type = models.CharField(max_length=20, null=True, blank=True)
    title = models.CharField(max_length=100, null=True, blank=True)
    img = models.ImageField(upload_to='img/', null=True, blank=True)
    text = RichTextField(null=True, blank=True)
    person = models.CharField(max_length=100, null=True, blank=True)
    weblink = models.URLField(max_length=200, null=True, blank=True)

    def __str__(self):
        return self.title

# contact us model
class Contact(models.Model):
    img = models.ImageField(upload_to='img/', null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    designation = models.CharField(max_length=100, null=True, blank=True)
    contact = models.CharField(max_length=10, null=True, blank=True)
    email = models.EmailField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name