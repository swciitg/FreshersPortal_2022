from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from .import views
# from .views import API,testing

app_name='fresher'

urlpatterns = [
    path('api/<str:var1>/<str:var2>',views.API),
    # path('api/imp/<int:var>/', API.as_view(),name='api-imp'),
    # path('api/imp/', API.as_view(),name='api-imp'),
    # path('api/base', API.as_view(var=2),name='api-base'),
    # path('api/contact', API.as_view(var=3),name='api-contact'),
    # path('api/open1', API.as_view(var=4),name='api-open1'),
    # path('api/open2', API.as_view(var=5),name='api-open2'),
    # path('api/faq', API.as_view(var=6),name='api-faq'),
]

urlpatterns = format_suffix_patterns(urlpatterns)