from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path
from .import views
# from .views import API,testing

app_name='fresher'

urlpatterns = [
    path('api/<str:var1>/<str:var2>',views.API),
]

urlpatterns = format_suffix_patterns(urlpatterns)