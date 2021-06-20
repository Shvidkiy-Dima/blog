from rest_framework.generics import ListAPIView, RetrieveAPIView
from post import models, serializers


class PostListView(ListAPIView):
    queryset = models.Post.objects.active()
    serializer_class = serializers.PostListSerializer


class PostDetailView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = models.Post.objects.active()
    serializer_class = serializers.PostDetailSerializer


class PostTagListView(ListAPIView):
    queryset = models.Tag.objects.active()
    serializer_class = serializers.TagSerializer
