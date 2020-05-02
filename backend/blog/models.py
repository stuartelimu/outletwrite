from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=120)
    excerpt = models.CharField(max_length=240)
    body = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']
