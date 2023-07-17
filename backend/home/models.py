from django.conf import settings
from django.db import models
class Pet(models.Model):
    'Generated Model'
    name = models.TextField()
    type = models.TextField()
    image_url = models.URLField()
    description = models.TextField()
    attributes = models.TextField()
