from django import forms

# make drop msg forms here
class DropMsgForm(forms.Form):
    name = forms.CharField(max_length=100, null=True, blank=True)
    email = forms.EmailField(max_length=100, null=True, blank=True)
    phone = forms.CharField(max_length=10, null=True, blank=True)
    msg = forms.TextField(null=True, blank=True)
    def __str__(self):
        return self.name