from django.contrib import admin
from post.models import Post, Tag
from martor.widgets import AdminMartorWidget
from django.db import models


@admin.register(Post)
class AdminPost(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
