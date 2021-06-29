import re
from datetime import timedelta
from django.db import models
from django.utils.text import slugify
from utils.models import BaseModel, SeoMixin
from colorfield.fields import ColorField
from martor.models import MartorField


class PostQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Post(SeoMixin, BaseModel):
    title = models.CharField(max_length=256, unique=True, db_index=True)
    slug = models.SlugField(blank=True, unique=True, db_index=True, editable=False)
    is_active = models.BooleanField(default=True)
    content = MartorField()
    tags = models.ManyToManyField('Tag', related_name='posts', blank=True)
    views = models.ManyToManyField('account.User', editable=False)
    reading_time = models.DurationField(null=True, blank=True, default=None,
                                        editable=False)

    objects = PostQuerySet.as_manager()

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        self.reading_time = timedelta(seconds=len(re.findall(r'\w+', self.content)))
        return super().save(*args, **kwargs)

    def min_reading_time(self):
        return (self.reading_time.seconds // 60) or 1


class Header(BaseModel):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='headers')
    anchor = models.CharField(max_length=256)
    title = models.CharField(max_length=256)


class TagQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Tag(BaseModel):
    slug = models.SlugField(blank=True, unique=True, db_index=True, editable=False)
    title = models.CharField(max_length=124, unique=True, db_index=True)
    color = ColorField(default='#FF0000')
    font_color = ColorField(default='#030000')
    hover_color = ColorField(default='#d1a1a1')
    is_active = models.BooleanField(default=True)
    views = models.ManyToManyField('account.User', editable=False)
    
    objects = TagQuerySet.as_manager()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)


class Like(BaseModel):
    user = models.ForeignKey('account.User', on_delete=models.PROTECT)
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
