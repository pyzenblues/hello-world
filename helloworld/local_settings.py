from .settings import *

INSTALLED_APPS += [
    'vue',
    'webpack_loader'
]


# django-webpack-loader

WEBPACK_LOADER = {
    'DEFAULT': {
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats.json')
    }
}
