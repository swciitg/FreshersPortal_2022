from django.shortcuts import render
from .forms import DropMsgForm
from rest_framework import status
from rest_framework.decorators import api_view
from django.contrib.auth.models import User, Group
from rest_framework.response import Response
from .serializers import *

@api_view(['GET', 'POST'])
def API(request,var,format=None):
    if request.method == 'GET':
        if var == "imp":
            queryset = Imp.objects.all()
            serializer = ImpSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var == "base":
            queryset = BaseModel.objects.all()
            serializer = BaseModelSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var == "contact":
            queryset = Contact.objects.all()
            serializer = ContactSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        elif var == "open1":
            queryset = Open1.objects.all()
            serializer = Open1Serializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        elif var == "open2":
            queryset = Open2.objects.all()
            serializer = Open2Serializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
        
        elif var == "faq":
            queryset = FAQ.objects.all()
            serializer = FAQSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)
            
        elif var == "mssg":
            queryset = None
            serializer = DropMsgSerializer(queryset, many=True)
            return Response(serializer.data,status=status.HTTP_200_OK)

        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
    
    elif request.method == 'POST':
        if var == "mssg":
            # form = DropMsgForm()
            serializer = DropMsgSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
