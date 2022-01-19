from app.models import Tasks

from rest_framework import serializers

class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tasks
        fields = ['id', 'task', 'done', 'created_at']

    def __init__(self, *args, **kwards):
        super(TasksSerializer, self).__init__(*args, **kwards)
        self.fields['task'].required = False
    
    