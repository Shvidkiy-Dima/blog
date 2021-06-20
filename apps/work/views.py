from rest_framework.generics import ListAPIView, RetrieveAPIView
from work import models, serializers


class WorkListView(ListAPIView):
    queryset = models.Work.objects.active()
    serializer_class = serializers.WorkListSerializer


class WorkDetailView(RetrieveAPIView):
    lookup_field = 'slug'
    queryset = models.Work.objects.active()
    serializer_class = serializers.WorkDetailSerializer
