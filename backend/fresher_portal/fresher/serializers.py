from dataclasses import field
from ssl import VERIFY_X509_TRUSTED_FIRST
from statistics import mode
from django.contrib.auth.models import Group
from rest_framework import serializers
from .models import Imp, BaseModel, Contact, Open1, Open2, FAQ, DropMsg

class ImpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imp
        fields = '__all__'

class BaseModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = BaseModel
        fields = '__all__'
    
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class Open1Serializer(serializers.ModelSerializer):
    class Meta:
        model = Open1
        fields = '__all__'

class Open2Serializer(serializers.ModelSerializer):
    class Meta:
        model = Open2
        fields = "__all__"

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"

class DropMsgSerializer(serializers.ModelSerializer):
    class Meta:
        model = DropMsg
        fields = "__all__"

        