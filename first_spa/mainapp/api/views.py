from rest_framework import viewsets
from rest_framework.response import Response


from .serializers import *
from ..models import *

class ProductsViewSet(viewsets.ModelViewSet):

    queryset = Product.objects.all()
    serializer_class = ProductsQsSerializer
