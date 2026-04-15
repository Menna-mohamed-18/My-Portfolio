import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  submitted = signal(false);
  sending = signal(false);

  form = {
    name: '',
    email: '',
    subject: 'Project Inquiry',
    message: '',
  };

  contactItems = [
    {
      icon: 'mail',
      label: 'Email',
      value: 'mennaaboelella18@gmail.com',
      href: 'mailto:mennaaboelella18@gmail.com',
      target: '_self',
      color: '#a8a4ff',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+20 122 083 8138',
      href: 'tel:+201220838138',
      target: '_self',
      color: '#62fae3',
    },
    {
      icon: 'location_on',
      label: 'Location',
      value: 'Cairo, Egypt / Remote',
      href: '#',
      target: '_self',
      color: '#ac8aff',
    },
  ];

  sendMessage() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', subject: 'Project Inquiry', message: '' };
    }, 1500);
  }
}
