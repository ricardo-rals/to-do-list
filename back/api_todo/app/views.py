from app.models import Tasks
from app.serializers import TasksSerializer

from rest_framework import viewsets

class TasksViewSet(viewsets.ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class = TasksSerializer