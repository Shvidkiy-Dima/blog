from django.db import models
from django.utils.text import slugify
from utils.models import BaseModel
from ckeditor_uploader.fields import RichTextUploadingField


class WorkQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Work(BaseModel):
    title = models.CharField(max_length=256, unique=True, db_index=True)
    preview = models.ImageField(upload_to='preview/')
    slug = models.SlugField(blank=True, unique=True, db_index=True)
    is_active = models.BooleanField(default=True)
    content = RichTextUploadingField()
    link = models.URLField()

    objects = WorkQuerySet.as_manager()

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
