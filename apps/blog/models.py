from django.db import models
from django.utils import timezone
from apps.category.models import Category
from ckeditor.fields import RichTextField

def blog_thumbnail_directory(instance, filename):
    return 'blog/{0}/{1}'.format(instance.title, filename)

# Create your models here.
class Post(models.Model):
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(published=True)
    options = (
        ('draft', 'Draft'),
        ('published', 'Published')
    )
    title =         models.CharField(max_length=255)
    slug =          models.SlugField(max_length=255, unique=True)
    thumbnail =     models.ImageField(upload_to=blog_thumbnail_directory, max_length=500)

    description =   models.CharField(max_length=255)
    content =       RichTextField()

    time_read =     models.IntegerField()

    published=      models.DateTimeField(default=timezone.now)
    views =         models.IntegerField(default=0, blank=True)
    
    status =        models.CharField(max_length=10, choices=options, default='draft')

    category =      models.ForeignKey(Category, on_delete=models.PROTECT)

    objects =       models.Manager()
    postobjects =   PostObjects()
    
    class Meta:
        ordering = ('-published',)

    def __str__(self):
        return self.title
    
    def get_view_count(self):
        views = ViewCount.objects.filter(post=self)
        return views.count()
    
class ViewCount(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='blogpost_view_count')
    ip_address = models.GenericIPAddressField()

    def __str__(self):
        return f"{self.ip_address}"