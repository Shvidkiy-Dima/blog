from django.db import models
from django.utils.text import slugify
from utils.models import BaseModel
from martor.models import MartorField


class WorkQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Work(BaseModel):
    title = models.CharField(max_length=256, unique=True, db_index=True)
    preview = models.ImageField(upload_to='preview/')
    slug = models.SlugField(blank=True, unique=True, db_index=True, editable=False)
    is_active = models.BooleanField(default=True)
    content = MartorField()
    description = models.TextField()
    link = models.URLField(null=True, blank=True, default=None)
    git_link = models.URLField(null=True, blank=True, default=None)

    objects = WorkQuerySet.as_manager()

    class Meta:
        ordering = ('created', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)
