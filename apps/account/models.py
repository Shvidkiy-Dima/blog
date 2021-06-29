from django.db import models, transaction
from django.db.models import F
from django.contrib.auth.models import AbstractUser, UserManager as BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = False


class UserQuerySet(models.QuerySet):
    pass


class User(AbstractUser):
    username = models.CharField(max_length=124, null=True,
                                blank=True, default=None, unique=True)

    password = models.CharField(max_length=128, null=True, blank=True)
    ip = models.GenericIPAddressField(null=True, blank=True)

    objects = UserManager.from_queryset(UserQuerySet)()

    def __str__(self):
        return f'user_{self.id}'
