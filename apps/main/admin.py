from django.contrib import admin
from solo.admin import SingletonModelAdmin
from main.models import MainBanner


@admin.register(MainBanner)
class MainBannerAdmin(SingletonModelAdmin):
    pass
