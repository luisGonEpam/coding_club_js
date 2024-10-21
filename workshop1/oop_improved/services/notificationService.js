class NotificationService {
  sendNotification(email, message) {
    console.log(`Sending notification to ${email}: ${message}`);
  }
}

module.exports = NotificationService;
