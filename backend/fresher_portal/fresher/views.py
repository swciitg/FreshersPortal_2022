from django.shortcuts import render

from .forms import DropMsgForm
# Create your views here.

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import GroupSerializer

class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer