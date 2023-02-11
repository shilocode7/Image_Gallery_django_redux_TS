

import statistics
from django.shortcuts import render
from rest_framework import serializers , status 
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .models import Stu
from rest_framework.views import APIView
from django.conf import settings
import os
# Create your views here.



class StuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stu
        fields = '__all__'




class StuView(APIView):
    """
    This class handle the CRUD operations for MyModel
    """
    def get(self, request):
        """
        Handle GET requests to return a list of MyModel objects
        """
        my_model = Stu.objects.all()
        serializer = StuSerializer(my_model, many=True)
        return Response(serializer.data)


    def post(self, request):
        """
        Handle POST requests to create a new Stu object
        """
        # usr =request.user
        # print(usr)
        serializer = StuSerializer(data=request.data, context={'user': request.user})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    def put(self, request, pk):
        """
        Handle PUT requests to update an existing Stu object
        """
        my_model = Stu.objects.get(pk=pk)
        serializer = StuSerializer(my_model, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
   
    def delete(self, request, pk):
        """
        Handle DELETE requests to delete a Stu object
        """
        my_model = Stu.objects.get(pk=pk)
        path = os.path.join(settings.MEDIA_ROOT, my_model.image.path)
        delete_image(path)
        my_model.delete()
        return Response("DELETED")


def delete_image(path):
    try:
        os.remove(path)
    except OSError:
        print("Error deleting the file")

@api_view(['GET','POST', 'DELETE', 'PUT'])
def test(req):
    return Response("Test")

@api_view(['GET','POST', 'DELETE', 'PUT'])
def data(req):
    return Response([{"data":20},{"baga":30}])