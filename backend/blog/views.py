from .models import Article
from .serializers import ArticleSerializer
from rest_framework import generics, pagination

class ArticleListPagination(pagination.PageNumberPagination):
    page_size = 10

class ArticleList(generics.ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    pagination_class = ArticleListPagination
    

class ArticleDetail(generics.RetrieveAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer