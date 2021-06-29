from rest_framework.generics import ListAPIView, RetrieveAPIView
from snippets import models, serializers


class SnippetListView(ListAPIView):
    pagination_class = None
    queryset = models.Snippet.objects.active()
    serializer_class = serializers.SnippetListSerializer


class SnippetDetailView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = models.Snippet.objects.active()
    serializer_class = serializers.SnippetDetailSerializer

