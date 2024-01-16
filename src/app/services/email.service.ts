import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { getFirestore } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  firestore: Firestore;

  constructor() {
    this.firestore = getFirestore();
  }

  sendEmail(
    email: string,
    message: string,
  ) {
    email = email.trim();
    message = message.trim();

    try {
      addDoc(collection(this.firestore, 'mail'), {
        to: ['kaloyangfx@gmail.com'],
        message: {
          subject: `New message from ${email}!`,
          html: `
          <body style="font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 0;">
            <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="80%" style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border: 1px solid #cccccc; border-radius: 5px;">
              <tr>
                <td>
                  <h1 style="font-size: 24px; color: #333333;">New Message from Visitor!</h1>
                  <p style="font-size: 16px; color: #666666;"><strong>Email from:</strong>${email}</p>
                  <div class="message" style="margin-top: 20px;">
                    <h2 style="font-size: 20px; color: #333333;">Message:</h2>
                    <p style="font-size: 16px; color: #666666;">${message}</p>
                  </div>
                </td>
              </tr>
            </table>
          </body>
                    `
        }
      });
    } catch (e) {
      console.log(e);
      return;
    }

  }
}
