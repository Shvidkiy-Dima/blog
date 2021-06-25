from django.contrib import admin
from post.models import Post, Tag, Header
from martor.widgets import AdminMartorWidget
from django.db import models


class HeaderInlineAdmin(admin.TabularInline):
    model = Header
    extra = 1


@admin.register(Post)
class AdminPost(admin.ModelAdmin):
    inlines = [HeaderInlineAdmin]
    formfield_overrides = {
        models.TextField: {'widget': AdminMartorWidget},
    }


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    pass
