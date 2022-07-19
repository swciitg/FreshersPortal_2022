from dataclasses import field
from ssl import VERIFY_X509_TRUSTED_FIRST
from statistics import mode
from django.contrib.auth.models import Group
from rest_framework import serializers
from .models import Imp, BaseModel, Contact, Open1, Open2, FAQ

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

class Open2Serializers(serializers.ModelSerializer):
    class Meta:
        model = Open2
        fields = "__all__"

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = "__all__"

# class GroupSerializer(serializers.HyperlinkedModelSerializer):

#     def check_model(self,obj):
#         var = self.context.get('var')

#         try:
#             return var
#         except:
#             return 'None'

#     var = serializers.SerializerMethodField('check_model')

#     if var == 'None':
#         pass
#     else:
#         if var == 1:
#             class Meta:
#                 model = Imp
#                 fields = "__all__"
#         elif var == 2:
#             class Meta:
#                 model = BaseModel
#                 fields = "__all__"
#         elif var == 3:
#             class Meta:
#                 model = Contact
#                 fields = "__all__"
#         elif var == 4:
#             class Meta:
#                 model = Open1
#                 fields = "__all__"
#         elif var == 5:
#             class Meta:
#                 model = Open2
#                 fields = "__all__"
#         elif var == 6:
#             class Meta:
#                 model = FAQ
#                 fields = "__all__"
#         else:
#             pass

        