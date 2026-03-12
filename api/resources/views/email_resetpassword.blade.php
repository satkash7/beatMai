<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>beatexpertise - Password Reset</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
</head>
<body style="font-family: 'Figtree', sans-serif; background-color: #f9f9f9; color: #333; padding: 20px;">
    <div style="max-width: 600px; margin: auto; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
        <div style="text-align: center;">
            <a href="https://beatexpertise.com" target="_blank">
                <img src="https://storage.beatexpertise.com/beatexpertise.jpg" alt="beatexpertise Logo" title="beatexpertise" style="width: 150px; border: none;"/>
            </a>
        </div>
        
        <h2 style="color: #333; text-align: center;">Password Reset Request</h2>
        
        <p>Hello {{ $name }},</p>
        
        <p>We received a request to reset the password for your EverlyTools account associated with <strong>{{ $email }}</strong>. If you made this request, please use the OTP below to proceed. This code is valid for 1 hour.</p>
        <p style="text-align: center; font-size: 20px; font-weight: bold; background: #f3f3f3; padding: 10px; border-radius: 5px;">{{ $token }}</p>
        
        <p>If you did not request this password reset, please ignore this email or contact our support team if you have any concerns.</p>
        
        <p>Best regards,</p>
        <p><strong>The beatexpertise Team</strong></p>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        
        <p style="text-align: center;"><a href="https://beatexpertise.com" style="color: #007bff; text-decoration: none;">beatexpertise  </a></p>
    </div>
</body>
</html>
