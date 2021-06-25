from rest_framework import serializers
from post import models


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Tag
        fields = ('title', 'color', 'slug', 'font_color', 'hover_color')


class HeaderSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Header
        fields = ('anchor', 'title')


class PostListSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    likes = serializers.IntegerField(source='like_set.count', read_only=True)

    class Meta:
        model = models.Post
        fields = ('title', 'slug', 'tags', 'id', 'created',
                  'min_reading_time', 'likes')


class PostDetailSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    headers = HeaderSerializer(many=True, read_only=True)

    class Meta:
        model = models.Post
        fields = ('title', 'slug', 'tags', 'content', 'id',
                  'created', 'headers', 'min_reading_time')


class PostInfoSerializer(serializers.ModelSerializer):

    summary = serializers.SerializerMethodField()
    for_user = serializers.SerializerMethodField()
    views = serializers.SerializerMethodField()

    class Meta:
        model = models.Post
        fields = ('summary', 'for_user', 'views')

    def get_views(self, obj):
        return obj.views.count()

    def get_summary(self, obj):
        return obj.like_set.count()

    def get_for_user(self, obj):
        request = self.context.get('request')
        if request is None or not request.user.is_authenticated:
            return None

        return obj.like_set.filter(user=request.user).count()


class PostLikeCreateSerializer(serializers.ModelSerializer):

    post = serializers.SlugRelatedField(slug_field='slug',
                                        queryset=models.Post.objects.all())

    class Meta:
        model = models.Like
        fields = ('post',)

    def validate(self, attrs):
        user = self.context.get('request').user
        post = attrs['post']
        print(post.like_set.filter(user=user).count())
        if post.like_set.filter(user=user).count() >= 3:
            raise serializers.ValidationError('Like limit')

        return attrs
