from account.models import User
from rest_framework import authentication
from utils.functions import get_user_ip


class IPAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        ip = get_user_ip(request)
        if not ip:
            return None

        user, _ = User.objects.get_or_create(ip=ip)
        return (user, None)

