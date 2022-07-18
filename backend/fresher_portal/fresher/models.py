from django.db import models
from ckeditor.fields import RichTextField
# Create your models here.

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
