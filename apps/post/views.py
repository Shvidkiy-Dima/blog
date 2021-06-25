from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from post import models, serializers, filters


class PostListView(ListAPIView):
    queryset = models.Post.objects.active()
    serializer_class = serializers.PostListSerializer
    filter_class = filters.ProductFilterSet


class PostDetailView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = models.Post.objects.active()
    serializer_class = serializers.PostDetailSerializer


class PostTagListView(ListAPIView):
    queryset = models.Tag.objects.active()
    serializer_class = serializers.TagSerializer
    pagination_class = None


class PostTagDetailView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = models.Tag.objects.active()
    serializer_class = serializers.TagSerializer


class PostInfoView(RetrieveAPIView):
    lookup_field = 'slug'
    serializer_class = serializers.PostInfoSerializer
    queryset = models.Post.objects.active()


class PostLikeView(CreateAPIView):
    serializer_class = serializers.PostLikeCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)
