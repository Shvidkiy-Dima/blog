from django.db import models
from martor.models import MartorField
from utils.models import BaseModel


class SnippetQuerySet(models.QuerySet):

    def active(self):
        return self.filter(is_active=True)


class Snippet(BaseModel):

    class CategoryChoices(models.IntegerChoices):
        python = 1, 'Python'

    title = models.CharField(max_length=256, unique=True, db_index=True)
    description = models.CharField(max_length=512)
    category = models.PositiveSmallIntegerField(choices=CategoryChoices.choices)
    slug = models.SlugField(blank=True, unique=True, db_index=True,
                            editable=False)
    is_active = models.BooleanField(default=True)
    content = MartorField()

    objects = SnippetQuerySet.as_manager()

