from django_filters import rest_framework as filters
from post.models import Post


class ProductFilterSet(filters.FilterSet):

    tag = filters.CharFilter(field_name="tags__slug")

    class Meta:
        model = Post
        fields = ["tag"]