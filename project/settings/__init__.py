import os

if os.getenv('SETTINGS_CONFIGURATION') == 'DEV':
    from .develop import *

elif os.getenv('SETTINGS_CONFIGURATION') == 'PROD':
    from .prod import *

else:
    from .base import *