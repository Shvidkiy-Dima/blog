from rest_framework.request import Request


def get_user_ip(request: Request):

    meta_dict = request.META
    x_forwarded_for = meta_dict.get('HTTP_X_FORWARDED_FOR')

    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = meta_dict.get('REMOTE_ADDR')

    return ip