from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import AccountViewSets
router=DefaultRouter()
router.register(
    'accounts',
    AccountViewSets
)
urlpatterns = [
    path('',include(router.urls))
]