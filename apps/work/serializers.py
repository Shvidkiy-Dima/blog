from rest_framework import serializers
from work import models


class WorkListSerializer(serializers.ModelSerializer):
    preview = serializers.SerializerMethodField()

    class Meta:
        model = models.Work
        fields = ('title', 'preview', 'slug', 'id', 'link', 'git_link', 'description')

    def get_preview(self, obj):
        return str(obj.preview.url)


class WorkDetailSerializer(WorkListSerializer):

    class Meta:
        model = models.Work
        fields = ('title', 'preview', 'slug', 'link', 'content', 'id')