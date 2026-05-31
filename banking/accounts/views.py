from rest_framework import viewsets
from .models import Account
from .serializer import AccountSerializer
class AccountViewSets(viewsets.ModelViewSet):
    queryset=Account.objects.all()
    serializer_class=AccountSerializer