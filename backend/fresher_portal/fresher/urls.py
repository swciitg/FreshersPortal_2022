
from django.urls import path
from .views import API

app_name='fresher'
urlpatterns = [
    path('api/imp', API.as_view(var=1),name='api-imp'),
    path('api/base', API.as_view(var=2),name='api-base'),
    path('api/contact', API.as_view(var=3),name='api-contact'),
    path('api/open1', API.as_view(var=4),name='api-open1'),
    path('api/open2', API.as_view(var=5),name='api-open2'),
    path('api/faq', API.as_view(var=6),name='api-faq'),
    

]
