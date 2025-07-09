<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Envelope;

class NotifyNewToolAdditionValidated extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $name;
    public $descriptions;
    public $link;
    public $linktoeverly;
    public $ownerEmail;
    public $year;

    public function __construct($name, $descriptions, $link, $linktoeverly, $ownerEmail,)
    {
        $this->name = $name;
        $this->descriptions = $descriptions;
        $this->link = $link;
        $this->linktoeverly = $linktoeverly;
        $this->ownerEmail = $ownerEmail;
        $this->year = Date('Y');
    }

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            from: new Address('tech@beatexpertise.com', 'beatexpertise.com'),
            subject: 'Beat Expertise',
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            view: 'email_addtoolvalidated'
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
