from rest_framework import serializers
from snippets import models


class SnippetListSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Snippet
        fields = ('title', 'category', 'slug', 'description',)


class SnippetDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Snippet
        fields = ('title', 'category', 'slug', 'description', 'content')