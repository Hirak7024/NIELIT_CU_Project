from django.db import models

class ConsultationForm(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    subject = models.CharField(max_length=100)
    preferred_contact_method = models.CharField(max_length=10)
    mental_health_concerns = models.CharField(max_length=200)
    consulted_before = models.CharField(max_length=3)
    preferred_mode_of_therapy = models.CharField(max_length=20)
    best_contact_time = models.CharField(max_length=10)
    problem_description = models.TextField()
    agree_to_policy = models.BooleanField(default=False)
    submitted_at = models.DateTimeField(auto_now_add=True)

#The below two lines of code helps in better readibility. As the model we have defined as a class so later it will be shown as object like this "<ConsultationForm object (5)>". But because of these 2 lines, it will help us to read properly like this "John Doe (john@example.com)"
    def __str__(self):  
        return f"{self.full_name} ({self.email})"
