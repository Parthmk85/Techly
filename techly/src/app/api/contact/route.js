import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();

    // Parse request body
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please provide name, email, and message' },
        { status: 400 }
      );
    }

    // Create new contact entry
    const contact = await Contact.create({
      name,
      email,
      phone: phone || '',
      company: company || '',
      message
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        data: contact 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return NextResponse.json(
        { error: errors.join(', ') },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve contacts (for admin purposes)
export async function GET(request) {
  try {
    await connectDB();
    
    const contacts = await Contact.find({}).sort({ createdAt: -1 }).limit(50);
    
    return NextResponse.json(
      { 
        success: true, 
        count: contacts.length,
        data: contacts 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  }
}
