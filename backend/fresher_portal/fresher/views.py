from django.shortcuts import render
from .forms import DropMsgForm
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User, Group
from rest_framework.response import Response
from .serializers import *

@api_view(['GET', 'POST'])
def API(request,var1,var2,format=None):
    if request.method == 'GET':
        if var1 == "imp":
            queryset = Imp.objects.filter(type=var2)
            serializer = ImpSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var1 == "base":
            queryset = BaseModel.objects.filter(type=var2)
            serializer = BaseModelSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var1 == "contact":
            queryset = Contact.objects.all()
            serializer = ContactSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var1 == "open1":
            queryset = Open1.objects.filter(type=var2)
            serializer = Open1Serializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        elif var1 == "open2":
            queryset = Open2.objects.filter(type=var2)
            serializer = Open2Serializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        elif var1 == "faq":
            queryset = FAQ.objects.all()
            serializer = FAQSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
            
        elif var1 == "mssg":
            queryset = None
            serializer = DropMsgSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'POST':
        if var1 == "mssg":
            # form = DropMsgForm()
            serializer = DropMsgSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
