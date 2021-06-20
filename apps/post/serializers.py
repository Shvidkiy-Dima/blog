from rest_framework import serializers
from post import models


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tag
        fields = ('title', 'color', 'slug')


class PostListSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Post
        fields = ('title', 'preview', 'slug', 'tags', 'id', 'created')


class PostDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = models.Post
        fields = ('title', 'preview', 'slug', 'tags', 'content2', 'id', 'created')