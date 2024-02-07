import { Component } from '@angular/core';

interface Link {
  name: string,
  icon: string,
  target: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  socialMedia: Link[] = [
    { name: 'YouTube Google', icon: '/assets/img/social/youtube-icon.png', target: 'http://www.youtube.com.br' },
    { name: 'Facebook Meta', icon: '/assets/img/social/facebook-icon.png', target: 'http://www.facebook.com.br' },
    { name: 'Instagram Meta', icon: '/assets/img/social/instagram-icon.png', target: 'http://www.instagram.com.br' },
    { name: 'Linkedin', icon: '/assets/img/social/linkedin-icon.png', target: 'http://www.linkedin.com.br' },
    { name: 'Telegram', icon: '/assets/img/social/telegram-icon.png', target: 'http://www.telegram.com.br' },
    { name: 'WhatsApp Meta', icon: '/assets/img/social/whatsapp-icon.png', target: 'http://www.whatsapp.com.br' }
  ];
  
  currentYear: number = new Date().getFullYear();
}