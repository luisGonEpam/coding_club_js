const NotificationService = require('./notificationService');

class SMSService extends NotificationService {
  sendNotification(phoneNumber, message) {
    console.log(`Sending SMS to ${phoneNumber}: ${message}`);
  }
}

module.exports = SMSService;
