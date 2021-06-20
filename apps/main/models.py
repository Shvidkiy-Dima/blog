from django.db import models
from solo.models import SingletonModel
from ckeditor_uploader.fields import RichTextUploadingField


class MainBanner(SingletonModel):
    title = models.CharField(max_length=256, null=True, blank=True, default=None)
    content = RichTextUploadingField(null=True, blank=True, default=None)
