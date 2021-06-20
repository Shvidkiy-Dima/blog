from django.db import models
from django.utils.text import slugify
from utils.models import BaseModel
from ckeditor_uploader.fields import RichTextUploadingField
from colorfield.fields import ColorField
from martor.models import MartorField

class PostQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Post(BaseModel):
    title = models.CharField(max_length=256, unique=True, db_index=True)
    preview = models.ImageField(upload_to='preview/')
    slug = models.SlugField(blank=True, unique=True, db_index=True)
    is_active = models.BooleanField(default=True)
    content2 = MartorField(null=True, blank=True, default=None)
    tags = models.ManyToManyField('Tag', related_name='posts', blank=True)

    views = ''
    like = ''


    objects = PostQuerySet.as_manager()

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)


class TagQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Tag(BaseModel):
    slug = models.SlugField(blank=True, unique=True, db_index=True)
    title = models.CharField(max_length=124, unique=True, db_index=True)
    color = ColorField(default='#FF0000')
    is_active = models.BooleanField(default=True)

    views = ''
    
    objects = TagQuerySet.as_manager()

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
