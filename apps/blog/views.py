from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from .models import Post
from apps.category.models import Category
from .serializers import PostSerializer

class BlogListView(APIView):
    permission_classes = (permissions.AllowAny,)
    def get(self, request, format=None):
        if Post.objects.all().exists():
                return Response({'posts': ''}, status=status.HTTP_200_OK)
        else:
                return Response({'Not found'}, status=status.HTTP_404_NOT_FOUND)
             