import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { Client } from "pg";

interface RequestBody {
  name: string;
  email: string;
}

export async function POST(request: NextRequest) {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
  });

  try {
    await client.connect();

    // Parse the request body to extract name and email
    const { name, email }: RequestBody = await request.json();

    // Check the current number of sign-ups
    const countResult = await client.query("SELECT COUNT(*) FROM message");
    const signupCount = parseInt(countResult.rows[0].count, 10);

    // If the number of sign-ups is already 90, reject the request
    if (signupCount >= 90) {
      return NextResponse.json(
        {
          message: "The waiting list is full. No more sign-ups are allowed.",
        },
        { status: 403 }, // Forbidden
      );
    }

    // Check if the email already exists
    const result = await client.query(
      "SELECT email FROM message WHERE email = $1",
      [email],
    );

    if (result.rows.length > 0) {
      return NextResponse.json(
        {
          message: `Email ${email} is already on the waiting list.`,
        },
        { status: 409 }, // Conflict
      );
    }

    // Insert the name and email into the database
    await client.query("INSERT INTO message (name, email) VALUES ($1, $2)", [
      name,
      email,
    ]);

    // Construct the response
    return NextResponse.json({
      message: `Email ${email} has been successfully added to the waiting list!`,
    });
  } catch (error) {
    console.error("Error during POST request:", error);
    return NextResponse.json(
      {
        message: "An error occurred. Please try again.",
      },
      { status: 500 },
    );
  } finally {
    // Ensure the database connection is closed
    await client.end();
  }
}
