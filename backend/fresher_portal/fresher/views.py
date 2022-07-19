from django.shortcuts import render

from .forms import DropMsgForm
# Create your views here.

from django.contrib.auth.models import User, Group
# from rest_framework import viewsets
from rest_framework.generics import ListAPIView
from .serializers import *


class API(ListAPIView):
    var = None

    def get_object(self,queryset = None, *args, **kwargs):
        return queryset.get(var=self.var)

    if var==1:
        serializer_class = ImpSerializer
        queryset = Imp.objects.all()
        
    elif var == 2:
        serializer_class = BaseModelSerializer
        queryset = BaseModel.objects.all()

    elif var==3:
        serializer_class = ContactSerializer
        queryset = Contact.objects.all()
    elif var==4:
        serializer_class = Open1Serializer
        queryset = Open1.objects.all()
    elif var==5:
        serializer_class = Open2Serializers
        queryset = Open2.objects.all()
    elif var==6:
        serializer_class = FAQSerializer
        queryset = FAQ.objects.all()




# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer