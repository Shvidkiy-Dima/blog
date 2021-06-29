from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import ArrayField


class BaseModel(models.Model):
    created = models.DateTimeField(default=timezone.now, editable=False)
    modified = models.DateTimeField(auto_now=True, editable=False)

    class Meta:
        abstract = True


class SeoMixin(models.Model):
    seo_title = models.CharField(max_length=255, null=True, blank=True, default=None)
    seo_description = models.CharField(max_length=1000, null=True, blank=True, default=None)
    seo_keywords = ArrayField(models.CharField(max_length=100), null=True, blank=True, default=None)

    class Meta:
        abstract = True
