# EmailJS Setup Guide for Gracious Angeli Travel & Tours

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your Gmail account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Choose "Gmail"
4. Follow the authentication process with your Gmail account
5. Note your **Service ID** (e.g., "service_abcd123")

### 3. Create Email Templates

#### Template 1: Contact Form
1. Go to "Email Templates" → "Create New Template"
2. Template ID: `contact_form`
3. Subject: `New Contact Inquiry - {{subject}}`
4. Content:
```
Hello,

You have received a new contact inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Website Contact Form
```

#### Template 2: Survey Form
1. Create another template with ID: `survey_feedback`
2. Subject: `🌟 New Customer Feedback - Gracious Angeli Travel & Tours`
3. Content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.6; 
            color: #1f2937; 
            margin: 0; 
            padding: 0; 
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #bfdbfe 100%);
        }
        .container { 
            max-width: 600px; 
            margin: 0 auto; 
            background: white; 
            border-radius: 16px; 
            overflow: hidden; 
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); 
        }
        .header { 
            background: linear-gradient(90deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%); 
            color: white; 
            padding: 30px; 
            text-align: center; 
        }
        .header h1 { 
            margin: 0; 
            font-size: 28px; 
            font-weight: bold; 
        }
        .header p { 
            margin: 10px 0 0 0; 
            opacity: 0.9; 
            font-size: 16px; 
        }
        .content { 
            padding: 40px 30px; 
        }
        .feedback-section { 
            margin-bottom: 30px; 
        }
        .feedback-section h2 { 
            color: #1e40af; 
            font-size: 20px; 
            margin-bottom: 20px; 
            border-bottom: 2px solid #dbeafe; 
            padding-bottom: 10px; 
        }
        .rating-item { 
            display: flex; 
            justify-content: space-between; 
            align-items: center; 
            padding: 12px 0; 
            border-bottom: 1px solid #f3f4f6; 
        }
        .rating-label { 
            font-weight: 600; 
            color: #374151; 
        }
        .star-rating {
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .star {
            font-size: 20px;
            color: #d1d5db;
            transition: color 0.2s ease;
        }
        .star.filled {
            color: #fbbf24;
        }
        .rating-text {
            margin-left: 8px;
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); 
            color: white; 
            padding: 4px 12px; 
            border-radius: 16px; 
            font-weight: 600; 
            font-size: 12px; 
        }
        .improvements-box { 
            background: #f8fafc; 
            border: 2px solid #dbeafe; 
            border-radius: 12px; 
            padding: 20px; 
            margin: 20px 0; 
        }
        .improvements-box h3 { 
            color: #1e40af; 
            margin: 0 0 15px 0; 
            font-size: 18px; 
        }
        .improvements-text { 
            color: #4b5563; 
            font-style: italic; 
            line-height: 1.5; 
        }
        .user-email-box { 
            background: #f0f9ff; 
            border: 2px solid #bae6fd; 
            border-radius: 12px; 
            padding: 20px; 
            margin: 20px 0; 
        }
        .user-email-box h3 { 
            color: #0369a1; 
            margin: 0 0 15px 0; 
            font-size: 18px; 
        }
        .email-text { 
            color: #0c4a6e; 
            font-weight: 500; 
            line-height: 1.5; 
            word-break: break-all; 
        }
        .timestamp { 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px; 
            margin-top: 30px; 
            padding-top: 20px; 
            border-top: 1px solid #e5e7eb; 
        }
        .footer { 
            background: #f8fafc; 
            padding: 20px 30px; 
            text-align: center; 
            color: #6b7280; 
            font-size: 14px; 
        }
        .logo-text { 
            color: #1e40af; 
            font-weight: bold; 
        }
        .overall-rating-section {
            text-align: center;
            margin: 30px 0;
            padding: 25px;
            background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
            border-radius: 16px;
            border: 2px solid #dbeafe;
        }
        .overall-rating-section h3 {
            color: #1e40af;
            margin: 0 0 20px 0;
            font-size: 20px;
            font-weight: bold;
        }
        .overall-stars {
            display: flex;
            justify-content: center;
            gap: 8px;
            margin-bottom: 15px;
        }
        .overall-star {
            font-size: 32px;
            color: #d1d5db;
            transition: all 0.3s ease;
        }
        .overall-star.filled {
            color: #fbbf24;
            transform: scale(1.1);
        }
        .overall-rating-text {
            color: #374151;
            font-weight: 600;
            font-size: 16px;
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌟 Customer Feedback Received</h1>
            <p>Thank you for sharing your experience with us!</p>
        </div>
        
        <div class="content">
            <div class="feedback-section">
                <h2>📊 Survey Results</h2>
                <div class="rating-item">
                    <span class="rating-label">Booking Ease:</span>
                    <span class="rating-value">{{booking_ease}}</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Information Clarity:</span>
                    <span class="rating-value">{{information_clarity}}</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Value for Money:</span>
                    <span class="rating-value">{{value_money}}</span>
                </div>
                <div class="rating-item">
                    <span class="rating-label">Experience Level:</span>
                    <span class="rating-value">{{experience}}</span>
                </div>
            </div>
            
            <div class="improvements-box">
                <h3>💡 Suggestions for Improvement</h3>
                <div class="improvements-text">{{improvements}}</div>
            </div>
            

            
            <div class="timestamp">
                📅 Submitted on: {{timestamp}}
            </div>
            
            <div class="overall-rating-section">
                <h3>⭐ Overall Rating</h3>
                <div class="overall-stars">
                    <span class="overall-star">★</span>
                    <span class="overall-star">★</span>
                    <span class="overall-star">★</span>
                    <span class="overall-star">★</span>
                    <span class="overall-star">★</span>
                </div>
                <p class="overall-rating-text">Overall Rating: {{overall_rating}}/5</p>
            </div>
        </div>
        
        <div class="footer">
            <p>This feedback helps us improve our services for all our valued customers.</p>
            <p><span class="logo-text">Gracious Angeli Travel & Tours</span> - Your Trusted Travel Partner Since 1999</p>
        </div>
    </div>
    
    <script>
        // Function to fill stars based on rating
        function fillOverallStars(rating) {
            const stars = document.querySelectorAll('.overall-star');
            const ratingValue = parseInt(rating) || 0;
            
            stars.forEach((star, index) => {
                if (index < ratingValue) {
                    star.classList.add('filled');
                } else {
                    star.classList.remove('filled');
                }
            });
        }
        
        // Fill stars when page loads
        document.addEventListener('DOMContentLoaded', function() {
            const overallRating = '{{overall_rating}}';
            fillOverallStars(overallRating);
        });
    </script>
</body>
</html>
```

### 4. Update Your Code

Replace the following in `assets/script.js`:

```javascript
// Replace these with your actual values
emailjs.init("YOUR_PUBLIC_KEY");           // Your EmailJS Public Key
'YOUR_SERVICE_ID'                          // Your Gmail Service ID
'YOUR_TEMPLATE_ID'                         // contact_form
'YOUR_SURVEY_TEMPLATE_ID'                  // survey_feedback
'your-email@gmail.com'                     // Your actual Gmail address
```

### 5. Get Your Public Key
1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your Public Key
3. Replace `YOUR_PUBLIC_KEY` in the code

### 6. Test Your Forms
1. Open your website
2. Fill out the contact form
3. Check your Gmail for the email
4. Test the survey form as well

## Security Notes
- EmailJS Public Key is safe to expose in frontend code
- No backend server required
- Gmail credentials are handled securely by EmailJS
- Rate limiting: 200 emails/month (free tier)

## Troubleshooting
- If emails don't arrive, check your Gmail spam folder
- Verify all IDs match exactly (case-sensitive)
- Check browser console for error messages
- Ensure Gmail service is properly connected in EmailJS dashboard

## Upgrade Options
- Free: 200 emails/month
- Paid plans: Start at $20/month for 10,000 emails
- Perfect for your current needs, can upgrade as business grows
