from django.urls import path
from rest_framework import routers
from .views import *

router= routers.SimpleRouter()
router.register('product',ProductsViewSet,basename='product')
urlpatterns = [
   # path ('test-api', TestAPIView.as_view(), name="test"),
]
urlpatterns += router.urls