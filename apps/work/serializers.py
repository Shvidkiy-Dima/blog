from rest_framework import serializers
from work import models


class WorkListSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Work
        fields = ('title', 'preview', 'slug', 'id', 'link')


class WorkDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Work
        fields = ('title', 'preview', 'slug', 'link', 'content', 'id')